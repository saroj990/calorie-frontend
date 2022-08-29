import { menu } from "../../constants/menu";
const Sidebar = () => {
  return (
    <div className="border-1 bg-slate-100 flex flex-col w-1/6 shadow h-screen overflow-scroll relative">
      <header className="font-bold text-xl text-center py-0.5">
        Calorie App
      </header>
      <div className="p-7">
        {menu.map((item, index) => (
          <div
            className=" cursor-pointer py-2 font-bold text-md"
            key={`sidbar-menu-${index}-${item.key}`}
          >
            {item.name}
          </div>
        ))}
      </div>

      <header className=" font-semibold text-lg w-full bottom-0 absolute text-center">
      Sign Out
      </header>
    </div>
  );
};

export default Sidebar;
