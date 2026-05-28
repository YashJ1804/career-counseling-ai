function DashboardCards() {

  const cards = [
    {
      title: "Tests Completed",
      value: "12"
    },
    {
      title: "Career Matches",
      value: "8"
    },
    {
      title: "Skill Score",
      value: "87%"
    },
    {
      title: "AI Confidence",
      value: "92%"
    }
  ];

  return (

    <div className="grid md:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-3xl shadow-lg p-6"
        >

          <h3 className="text-slate-500 text-lg">
            {card.title}
          </h3>

          <h1 className="text-4xl font-bold mt-4 text-indigo-600">
            {card.value}
          </h1>

        </div>

      ))}

    </div>
  );
}

export default DashboardCards;