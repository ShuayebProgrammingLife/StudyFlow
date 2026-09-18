
import { LuNotebookPen } from "react-icons/lu";


const Navbar = () => {
  return (
    <div className="bg-[#f0f1eb]">
      <nav className="flex justify-between gap-4 items-center p-4 container mx-auto">
        <span>
          <LuNotebookPen className="text-[#0e7c66] h-[25px] w-[25px]" />
        </span>

        <ul className="flex justify-between gap-4 text-slate-800">
          <li><a href="#">Features</a></li>
          <li><a href="#">How it Works</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>

        <div className="flex items-between gap-4">
          <button className="border border-[#0e7c66] text-[#0e7c66] hover:bg-[#0e7c66] hover:text-white py-2 px-4 rounded-md">Login</button>
          <button className="bg-[#0e7c66] hover:bg-[#0a5d4e] text-white py-2 px-4 rounded-md ">Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar