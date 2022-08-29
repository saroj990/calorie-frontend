import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="p-4 w-11/12 bg-slate-600 text-white min-h-screen g-full">
        {children}
      </main>
    </div>
  );
};

export { Layout };
