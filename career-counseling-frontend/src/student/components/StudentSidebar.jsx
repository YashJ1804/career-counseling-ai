import {
  FaHome,
  FaClipboardList,
  FaChartBar,
  FaRoad,
  FaUser
} from "react-icons/fa";

function StudentSidebar() {

  const menuItems = [
    {
      icon: <FaHome />,
      label: "Dashboard"
    },
    {
      icon: <FaClipboardList />,
      label: "Aptitude Test"
    },
    {
      icon: <FaChartBar />,
      label: "Results"
    },
    {
      icon: <FaRoad />,
      label: "Roadmap"
    },
    {
      icon: <FaUser />,
      label: "Profile"
    }
  ];

  return (

    <div className="w-[260px] min-h-screen bg-slate-900 text-white p-6">

      <h1 className="text-3xl font-bold text-indigo-400">
        CareerAI
      </h1>

      <div className="mt-12 space-y-4">

        {menuItems.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 cursor-pointer transition"
          >

            <span className="text-xl">
              {item.icon}
            </span>

            <span className="text-lg">
              {item.label}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default StudentSidebar;