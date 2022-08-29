import { menu } from "../../constants/menu";
const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/6 shadow-xl h-screen overflow-scroll relative">
      <header className="text-slate-600 font-bold text-xl px-10 py-0.5">
        Calorie App
      </header>
      <div className="flex flex-col p-7">
        {menu.map((item, index) => (
          <div
            className=" cursor-pointer py-2 font-bold text-md text-slate-600"
            key={`sidbar-menu-${index}-${item.key}`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <div className=" w-full bottom-0 absolute">
        <div className="w-full text-white py-2 bg-slate-600 border-1 text-center font-bold text-whitecursor-pointer">
          {" "}
          Sign Out
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
