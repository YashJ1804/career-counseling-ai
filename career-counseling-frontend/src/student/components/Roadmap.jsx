function Roadmap() {

  const roadmap = [
    "Learn Python Fundamentals",
    "Master Data Structures",
    "Learn Machine Learning",
    "Build AI Projects",
    "Apply for Internships"
  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold">
        AI Career Roadmap
      </h2>

      <div className="mt-8 space-y-5">

        {roadmap.map((step, index) => (

          <div
            key={index}
            className="flex items-center gap-5"
          >

            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
              {index + 1}
            </div>

            <p className="text-lg">
              {step}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Roadmap;