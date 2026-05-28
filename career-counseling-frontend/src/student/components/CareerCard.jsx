function CareerCard() {

  const careers = [
    {
      title: "Data Scientist",
      match: "92%"
    },
    {
      title: "AI Engineer",
      match: "88%"
    },
    {
      title: "Cybersecurity Analyst",
      match: "81%"
    }
  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-slate-800">
        AI Career Recommendations
      </h2>

      <div className="mt-8 space-y-6">

        {careers.map((career, index) => (

          <div
            key={index}
            className="border rounded-2xl p-5 hover:shadow-md transition"
          >

            <div className="flex justify-between items-center">

              <h3 className="text-2xl font-semibold">
                {career.title}
              </h3>

              <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-bold">
                {career.match}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CareerCard;