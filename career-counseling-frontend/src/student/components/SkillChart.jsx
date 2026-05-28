import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer
} from "recharts";

function SkillChart() {

  const data = [
    {
      skill: "Logic",
      score: 90
    },
    {
      skill: "Creativity",
      score: 75
    },
    {
      skill: "Communication",
      score: 80
    },
    {
      skill: "Leadership",
      score: 70
    },
    {
      skill: "Problem Solving",
      score: 95
    }
  ];

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold mb-6">
        Skill Analysis
      </h2>

      <div className="h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <RadarChart data={data}>

            <PolarGrid />

            <PolarAngleAxis dataKey="skill" />

            <Radar
              dataKey="score"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.6}
            />

          </RadarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default SkillChart;