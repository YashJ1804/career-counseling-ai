function ProgressBar({ current, total }) {

  const percentage = ((current + 1) / total) * 100;

  return (

    <div className="w-full bg-slate-200 rounded-full h-4">

      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      >

      </div>

    </div>
  );
}

export default ProgressBar;