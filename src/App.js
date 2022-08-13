import Meal from "./components/Meal";
import { BsArrowLeftShort } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { Menu } from "./constants/menu";
import { MdDashboard } from "react-icons/md";

import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-indigo-500 h-screen p-5 pt-8 ${
          open ? "w-1/6" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className="bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-slate-500 cursor-pointer"
        />
        <div className="inline-flex">
          <FcCalendar
            className={`text-4xl rounded cursor-pointer block float-left mr-4 duration-300 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-2xl duration-400 ${
              !open && "scale-0"
            }`}
          >
            Calorie Counter
          </h1>
        </div>
        <ul className="pt-2">
          {Menu.map((menu, index) => (
            <li
              key={index}
              className="text-gray-200 text-md p-2 cursor-pointer flex items-center gap-x-4 hover:bg-light-white rounded-md mt-2"
            >
              <span>
                <MdDashboard />
              </span>
              <span
                className={`text-base font-medium flex-1 ${!open && "hidden"}`}
              >
                {menu.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`p-7 ${open ? "w-5/6" : "w-full"}`}>
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <Meal />
      </div>
    </div>
  );
}

export default App;
