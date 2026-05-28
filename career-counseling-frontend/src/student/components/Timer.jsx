function Timer({ timeLeft }) {

  return (

    <div className="bg-red-100 text-red-600 px-6 py-3 rounded-xl font-bold">
      Time Left: {timeLeft}s
    </div>

  );
}

export default Timer;