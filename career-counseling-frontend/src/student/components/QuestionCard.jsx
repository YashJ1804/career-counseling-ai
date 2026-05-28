function QuestionCard({
  question,
  options,
  selected,
  onSelect
}) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-slate-800">
        {question}
      </h2>

      <div className="mt-8 space-y-4">

        {options.map((option, index) => (

          <button
            key={index}
            onClick={() => onSelect(option)}
            className={`w-full text-left p-4 rounded-xl border transition

            ${
              selected === option
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-100"
            }
            `}
          >

            {option}

          </button>

        ))}

      </div>

    </div>
  );
}

export default QuestionCard;