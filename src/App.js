import Meal from "./components/Meal";
import { useState } from "react";
import { Sidebar } from "./components/pages/Sidebar";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`bg-indigo-500 h-screen p-5 pt-8 ${
          open ? "w-1/6" : "w-20"
        } duration-300 relative`}
      >
        <Sidebar open={open} onClick={setOpen} />
      </div>
      <div className={`p-7 ${open ? "w-5/6" : "w-full"}`}>
        <h1 className="text-2xl font-semibold">Home Page</h1>
        <Meal />
      </div>
    </div>
  );
}

export default App;
