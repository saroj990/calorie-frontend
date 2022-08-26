import { BsArrowLeftShort } from "react-icons/bs";
import { FcCalendar } from "react-icons/fc";
import { MdDashboard } from "react-icons/md";
import { menu } from "../../constants/menu";

export const Sidebar = ({ open, onClick }) => {
  return (
    <div>
      <BsArrowLeftShort onClick={() => onClick(!open)} className="myIcon" />
      <div className="flex align-top">
        <span>
          <FcCalendar
            className={`text-2xl rounded cursor-pointer block float-left mr-4 duration-300 ${
              open && "rotate-[360deg]"
            }`}
          />
        </span>
        <span>
          <h1
            className={`text-white origin-left font-medium text-xl duration-400 ${
              !open && "scale-0"
            }`}
          >
            Calorie Counter
          </h1>
        </span>
      </div>
      <ul className="pt-2">
        {menu.map((item, index) => (
          <li
            key={index}
            className="text-gray-200 text-md py-2 px-0.5 cursor-pointer flex items-center gap-x-4 hover:bg-light-white rounded-md mt-2"
          >
            <span>
              <MdDashboard />
            </span>
            <span className={`text-base font- flex-1 ${!open && "hidden"}`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
