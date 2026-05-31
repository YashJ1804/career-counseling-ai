import { useEffect, useState } from "react";

import axios from "axios";

function Assessment() {
    const TOTAL_QUESTIONS = 10;
    const [allQuestions, setAllQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState(null);

const [nextQuestion, setNextQuestion] = useState(null);

const [questionNumber, setQuestionNumber] = useState(1);

const [score, setScore] = useState(0);

const [streak, setStreak] = useState(0);

const [difficulty, setDifficulty] = useState("easy");
    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const loadInitialQuestion = async () => {

    const firstQuestion =
        await fetchQuestion();

    setCurrentQuestion(firstQuestion);
    setAllQuestions([firstQuestion]);

    fetchQuestion(difficulty)
    .then((bufferedQuestion) => {

        setNextQuestion(bufferedQuestion);

    });

    setLoading(false);

};
    useEffect(() => {

        loadInitialQuestion();

    }, []);
    
    const handleAnswer = async (selectedOption) => {

    const isCorrect =
        selectedOption ===
        currentQuestion.correct_answer;

    if(isCorrect){

        setScore(prev => prev + 5);

        const newStreak = streak + 1;

        setStreak(newStreak);

        if(newStreak >= 3){

            setDifficulty("hard");

        }

    }

    else{

        setStreak(0);

        setDifficulty("easy");

    }

    if(questionNumber === TOTAL_QUESTIONS){

    setResult({

        finished: true

    });

    return;

}

setCurrentQuestion(nextQuestion);

setAllQuestions(prev => [

    ...prev,

    nextQuestion

]);

fetchQuestion(difficulty)
    .then((bufferedQuestion) => {

        setNextQuestion(bufferedQuestion);

    });

setQuestionNumber(prev => prev + 1);

};
    const fetchQuestion = async (
    difficultyLevel = "easy",
    parameter = "logical"
) => {

    try {

        const response = await axios.post(

            "http://127.0.0.1:8000/api/generate-questions",

            {

                stream: "PCM",

                difficulty: difficultyLevel,

                parameter: parameter

            }

        );

        return response.data.question;

    } catch (error) {

        console.log(error);

    }

};
    const submitTest = async () => {

    try {
        const token = localStorage.getItem("token");
        const response = await axios.post(

    "http://127.0.0.1:8000/api/submit-test",

    {
        questions: allQuestions,
        answers: answers

    },

    {

        headers: {

            Authorization: `Bearer ${token}`

        }

    }

);

        console.log(response.data);

        setResult(response.data);

    } catch (error) {

        console.log(error);

    }

};
    if(loading){

        return (

            <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

                Loading Questions...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <h1 className="text-4xl font-bold text-indigo-600 mb-10">

                AI Career Assessment

            </h1>

            <div className="space-y-8">

                {

                    currentQuestion && (

    <div className="bg-white p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-semibold mb-6">

            Q{questionNumber}. {currentQuestion.question}

        </h2>

        <div className="space-y-4">

            {

                currentQuestion.options.map((option, i) => (

                    <button
                        key={i}

                        onClick={() =>
                            handleAnswer(option)
                        }

                        className="w-full text-left p-4 border rounded-xl hover:bg-indigo-50 transition"
                    >

                        {option}

                    </button>

                ))

            }

        </div>

    </div>

)

                }

            </div>
            <div className="mt-10">
{

    questionNumber > TOTAL_QUESTIONS && (

        <button
            onClick={submitTest}
            className="bg-green-600 text-white px-10 py-4 rounded-xl text-xl hover:bg-green-700 transition"
        >

            Submit Test

        </button>

    )

}
    {
    result && (

        <div className="mt-16 bg-white p-10 rounded-3xl shadow-2xl">

            <h2 className="text-4xl font-bold text-green-600 mb-8">

                Assessment Result

            </h2>

            <div className="space-y-4 text-xl">
                <p>

    <span className="font-bold">
        Performance:
    </span>

    {" "}

    {result.performance}

</p>

                <p>

                    <span className="font-bold">
                        Score:
                    </span>

                    {" "}

                    {result.score}

                </p>

                <p>

                    <span className="font-bold">
                        Total Marks:
                    </span>

                    {" "}

                    {result.total_marks}

                </p>

                <p>

                    <span className="font-bold">
                        Percentage:
                    </span>

                    {" "}

                    {

                        (
                            result.score /
                            result.total_marks
                        ) * 100

                    }%

                </p>

            </div>

        </div>

    )
}
</div>

        </div>

    );

}

export default Assessment;