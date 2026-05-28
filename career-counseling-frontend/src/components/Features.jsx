import {
  FaBrain,
  FaChartLine,
  FaUserGraduate,
  FaRobot
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaBrain />,
      title: "AI Aptitude Analysis",
      desc: "Advanced aptitude testing powered by machine learning."
    },
    {
      icon: <FaChartLine />,
      title: "Career Prediction",
      desc: "Get intelligent career recommendations with confidence scores."
    },
    {
      icon: <FaUserGraduate />,
      title: "Student Dashboard",
      desc: "Track your skills, progress, and learning roadmap."
    },
    {
      icon: <FaRobot />,
      title: "AI Counseling",
      desc: "Hybrid AI and counselor-assisted guidance system."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-slate-800">
            Powerful Features
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Everything needed for intelligent career guidance.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition"
            >

              <div className="text-4xl text-indigo-600">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-600 mt-4">
                {feature.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;