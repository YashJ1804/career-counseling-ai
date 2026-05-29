<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AIController extends Controller
{
    public function testGemini()
    {

        $apiKey = env('GEMINI_API_KEY');

        $response = Http::post(

            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={$apiKey}",

            [

                "contents" => [

                    [

                        "parts" => [

                            [

                                "text" => "Say Hello from Gemini AI"

                            ]

                        ]

                    ]

                ]

            ]

        );

        return response()->json(
            $response->json()
        );

    }
}