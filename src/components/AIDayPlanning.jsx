import { BiStar } from "react-icons/bi";

const AIDayPlanning = () => {
  return (
    <section className="container mx-auto bg-[#14231f] grid grid-cols-2 gap-4 text-white py-[75px] px-10 items-center rounded-xl">
      {/* right part */}
      <div className="space-y-4">
        <h3 className="text-yellow-500 text-lg font-semibold flex gap-2">
          {" "}
          <BiStar /> AI Day Planning
        </h3>
        <h2 className="font-bold text-4xl">Plan Your Day with AI</h2>
        <p>
          Let our AI help you organize your day and maximize your productivity.
        </p>
      </div>
      {/* left part */}
      <div className="space-y-4">
        <div className="bg-[#ffffff29] p-4 rounded-lg shadow-md border border-[#ffffff29] max-w-[500px]">
          <h2 className="text-yellow-500">Today's Suggested Plan</h2>
          <ul className="list-disc list-inside space-y-2 mt-4">
            <li>
              9:00 AM - 10:00 AM: Review notes from yesterday's study session
            </li>
            <li>10:00 AM - 11:00 AM: Work on assignment for Math class</li>
            <li>11:00 AM - 12:00 PM: Take a break and go for a walk</li>
            <li>12:00 PM - 1:00 PM: Lunch break</li>
            <li>1:00 PM - 2:00 PM: Study for upcoming History test</li>
            <li>2:00 PM - 3:00 PM: Work on group project for Science class</li>
            <li>
              3:00 PM - 4:00 PM: Review notes and prepare for tomorrow's classes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AIDayPlanning;