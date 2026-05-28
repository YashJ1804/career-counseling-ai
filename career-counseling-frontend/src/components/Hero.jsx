function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-6xl font-bold leading-tight text-slate-800">
            AI-Powered Career Guidance for Every Student
          </h1>

          <p className="mt-6 text-lg text-slate-600">
            Discover your ideal career path through aptitude analysis,
            AI recommendations, and personalized learning roadmaps.
          </p>

          <div className="mt-8 flex gap-4">

            <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-indigo-700 transition">
              Get Started
            </button>

            <button className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl text-lg hover:bg-indigo-50 transition">
              Learn More
            </button>

          </div>
        </div>

        <div className="flex justify-center">

          <div className="bg-white shadow-2xl rounded-3xl p-8 w-[400px]">

            <h2 className="text-2xl font-bold text-indigo-600">
              Career Match Analysis
            </h2>

            <div className="mt-6 space-y-4">

              <div>
                <div className="flex justify-between">
                  <span>Data Science</span>
                  <span>92%</span>
                </div>

                <div className="w-full bg-slate-200 h-3 rounded-full mt-2">
                  <div className="bg-indigo-600 h-3 rounded-full w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Cybersecurity</span>
                  <span>85%</span>
                </div>

                <div className="w-full bg-slate-200 h-3 rounded-full mt-2">
                  <div className="bg-purple-500 h-3 rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>UI/UX Design</span>
                  <span>74%</span>
                </div>

                <div className="w-full bg-slate-200 h-3 rounded-full mt-2">
                  <div className="bg-pink-500 h-3 rounded-full w-[74%]"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;