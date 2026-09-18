


const Banner = () => {
  return (
    <div className="container mx-auto text-center py-[45px] space-y-5">
      <span className="badge">Build for Students who like to see Progress</span>
      <h2 className="text-3xl font-semibold mt-4 mx-auto max-w-[600px]">Turns big Goal into Daily Tasks.You'll actually Finish</h2>
      <p className="text-lg mt-2 mx-auto max-w-[600px]">Set a Goal, Break it down into smaller tasks, and track your progress bar every time. You check one OFF. No Spreadsheets, No guessing What to study next, No more cluttered notebooks!</p>

      <div className="flex justify-center gap-2">
        <button className="btn btn-primary mt-4">Start Free Trial</button>
        <button className="btn btn-secondary mt-4 ml-4">Learn More</button>
      </div>

      <div className="card bg-base-100 shadow-sm mt-10 w-[400px] mx-auto space-y-4 text-black p-4"> 
        <div className="flex justify-between items-center gap-4">
          <h2 className="font-bold text-2xl">Today's Process</h2>
          <p className="">50% complete</p>
        </div>
        <progress className="progress text-[#007bff] h-2" value="50" max="100"></progress>

        <ul className="space-y-4">
          {/* <li className="flex justify-between items-center gap-4 rounded-2xl p-2 hover:bg-[#f0f0f0]">
            <div className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span>Task 1</span>
            </div>
            <span>10:00 AM</span>
          </li> */}
          
          <li className="flex justify-between items-center gap-4 border border-gray-300 rounded-2xl p-2 hover:bg-[#f0f0f0]">
            <div className="flex items-center gap-2">
              <span className="mr-4">✅</span>
              <span>Task 1</span>
            </div>
            <span>10:00 AM</span>
          </li>

          <li className="flex justify-between items-center gap-4 border border-gray-300 rounded-2xl p-2 hover:bg-[#f0f0f0]">
            <div className="flex items-center gap-2">
              <span className="mr-4">✅</span>
              <span>Task 1</span>
            </div>
            <span>10:00 AM</span>
          </li>

          <li className="flex justify-between items-center gap-4 border border-gray-300 rounded-2xl p-2 hover:bg-[#f0f0f0] line-through">
            <div className="flex items-center gap-2">
              <span className="mr-4">❌</span>
              <span>Task 1</span>
            </div>
            <span>10:00 AM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;