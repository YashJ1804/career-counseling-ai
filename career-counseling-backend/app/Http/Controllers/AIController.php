<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Question;
use App\Models\TestAttempt;

use App\Models\StudentAnswer;
class AIController extends Controller
{
    public function testGemini()
    {

        $apiKey = env('GEMINI_API_KEY');

        $response = Http::withHeaders([

            'Content-Type' => 'application/json',

            'X-goog-api-key' => $apiKey

        ])->post(

            'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',

            [

                "contents" => [

                    [

                        "parts" => [

                            [

                                "text" => "Explain how AI works in a few words"

                            ]

                        ]

                    ]

                ]

            ]

        );

        $data = $response->json();

        return response()->json([

            'success' => true,

            'message' => $data['candidates'][0]['content']['parts'][0]['text']

        ]);

    }

public function generateQuestions(Request $request)
{

    $stream = $request->stream;

    $apiKey = env('GEMINI_API_KEY');

    $difficulty = $request->difficulty ?? 'easy';

$parameter = $request->parameter ?? 'logical';

$prompt = "

Generate ONE career assessment MCQ question
for a {$stream} student.

Parameter:
{$parameter}

Difficulty:
{$difficulty}

IMPORTANT RULES:

1. Return ONLY valid JSON.

2. The response must contain:
- question
- options
- correct_answer
- parameter
- difficulty

3. Correct answer must be randomized.

4. Options must contain full answer text.

5. Hard questions should require deeper reasoning.

Format:

{
    \"question\": \"Question text\",

    \"options\": [

        \"Option 1\",

        \"Option 2\",

        \"Option 3\",

        \"Option 4\"

    ],

    \"correct_answer\": \"Exact correct option\",

    \"parameter\": \"logical\",

    \"difficulty\": \"easy\"
}

";

    $response = Http::withHeaders([

        'Content-Type' => 'application/json',

        'X-goog-api-key' => $apiKey

    ])->post(

        'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent',

        [

            "contents" => [

                [

                    "parts" => [

                        [

                            "text" => $prompt

                        ]

                    ]

                ]

            ]

        ]

    );

    $data = $response->json();

    $text = $data['candidates'][0]['content']['parts'][0]['text'];

    $cleanedText = str_replace(

        ['```json', '```'],

        '',

        $text

    );

    $question = json_decode($cleanedText, true);


    return response()->json([

        'success' => true,

        'question' => $question

    ]);

}
public function submitTest(Request $request)
{

    $answers = $request->answers;

    $questions = $request->questions;
    $score = 0;

    $total = 0;

    $results = [];

    foreach($questions as $question){

        $total += $question['marks'] ?? 5;

        $selectedAnswer =
    $answers[$question['question']] ?? null;

        $isCorrect =
            $selectedAnswer ===
$question['correct_answer'];

        if($isCorrect){

            $score += $question['marks'] ?? 5;

        }

        $results[] = [

            'question' => $question['question'],

            'selected_answer' => $selectedAnswer,

            'correct_answer' => $question['correct_answer'],

            'is_correct' => $isCorrect

        ];

    }
    $percentage = ($score / $total) * 100;

$performance = '';

if($percentage >= 80){

    $performance = 'Excellent';

}

elseif($percentage >= 60){

    $performance = 'Good';

}

elseif($percentage >= 40){

    $performance = 'Average';

}

else{

    $performance = 'Needs Improvement';

}
$attempt = TestAttempt::create([

    'user_id' => auth()->id(),

    'score' => $score,

    'total_marks' => $total,

    'percentage' => $percentage,

    'performance' => $performance

]);

foreach($results as $result){

    StudentAnswer::create([

        'attempt_id' => $attempt->id,

        'question' => $result['question'],

        'selected_answer' =>
            $result['selected_answer'],

        'correct_answer' =>
            $result['correct_answer'],

        'is_correct' =>
            $result['is_correct']

    ]);

}
    return response()->json([

        'success' => true,

        'score' => $score,

        'total_marks' => $total,

        'results' => $results

    ]);

}
}