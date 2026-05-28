import { useEffect, useState } from "react";

import questions from "../data/questions";

import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import Timer from "../components/Timer";

function AptitudeTest() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(120);

  const question = questions[currentQuestion];

  useEffect(() => {

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(timer);

  }, []);

  const handleSelect = (option) => {

    setAnswers({
      ...answers,
      [question.id]: option
    });

  };

  const handleNext = () => {

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    else {
      calculateResults();
    }

  };

  const calculateResults = () => {

    let scores = {
      logical: 0,
      creativity: 0,
      communication: 0,
      leadership: 0
    };

    questions.forEach((q) => {

      if (answers[q.id] === q.answer) {
        scores[q.category] += 25;
      }

    });

    console.log(scores);

    alert("Test Completed!");

  };

  return (

    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-4xl mx-auto">

        <div className="flex justify-between items-center mb-6">

          <h1 className="text-4xl font-bold text-slate-800">
            Aptitude Test
          </h1>

          <Timer timeLeft={timeLeft} />

        </div>

        <ProgressBar
          current={currentQuestion}
          total={questions.length}
        />

        <div className="mt-8">

          <QuestionCard
            question={question.question}
            options={question.options}
            selected={answers[question.id]}
            onSelect={handleSelect}
          />

        </div>

        <div className="mt-8 flex justify-end">

          <button
            onClick={handleNext}
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition"
          >

            {
              currentQuestion === questions.length - 1
                ? "Submit Test"
                : "Next Question"
            }

          </button>

        </div>

      </div>

    </div>
  );
}

export default AptitudeTest;