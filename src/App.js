import Meal from "./components/Meal";
import { useState } from "react";
import { Sidebar } from "./components/pages/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [open, setOpen] = useState(true);
  const notify = () => toast("Wow so easy!");

  return (
    <div className="flex">
      <ToastContainer />

      <div
        className={`bg-indigo-500 h-screen p-5 pt-8 ${
          open ? "w-1/6" : "w-20"
        } duration-300 relative`}
      >
        <Sidebar open={open} onClick={setOpen} />
        <button onClick={notify}>Notify!</button>
      </div>
      <div className={`p-7 ${open ? "w-5/6" : "w-full"}`}>
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <Meal />
      </div>
    </div>
  );
}

export default App;
