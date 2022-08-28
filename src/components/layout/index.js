import Sidebar from "./sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <main className="w-11/12 bg-zinc-900 text-white min-h-screen g-full">
        {children}
      </main>
    </div>
  );
};

export { Layout };
