import { useNavigate } from "react-router-dom";
import { menu } from "../../constants/menu";
import { authHelper } from "../../util/auth";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authHelper.signOut();
    navigate("/auth/signin", { replace: true });
  };
  return (
    <div className="border-1 pl-6 bg-slate-700 flex flex-col w-1/6 shadow h-screen overflow-scroll relative text-white">
      <header className="font-bold text-lg py-5 uppercase">
        Hi, {JSON.parse(localStorage.getItem("user"))?.fullName}
      </header>
      <ul>
        {menu.map((item, index) => (
          <li
            className=" cursor-pointer py-2 font-bold text-md"
            key={`sidbar-menu-${index}-${item.key}`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <header
        className="font-semibold text-md w-full bottom-0 absolute py-1 uppercase"
        onClick={handleLogout}
      >
        Sign Out
      </header>     
    </div>
  );
};

export default Sidebar;
