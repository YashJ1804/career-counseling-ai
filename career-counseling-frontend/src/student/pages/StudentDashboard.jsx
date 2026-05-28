import StudentSidebar from "../components/StudentSidebar";
import DashboardCards from "../components/DashboardCards";
import CareerCard from "../components/CareerCard";
import SkillChart from "../components/SkillChart";
import Roadmap from "../components/Roadmap";

function StudentDashboard() {

  return (

    <div className="flex bg-slate-100 min-h-screen">

      <StudentSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-4xl font-bold text-slate-800">
          Welcome Back 👋
        </h1>

        <p className="text-slate-500 mt-2">
          Here's your AI-powered career analysis.
        </p>

        <div className="mt-10">
          <DashboardCards />
        </div>

        <CareerCard />

        <SkillChart />

        <Roadmap />

      </div>

    </div>
  );
}

export default StudentDashboard;