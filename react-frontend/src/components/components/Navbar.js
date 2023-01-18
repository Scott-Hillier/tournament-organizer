import { React, useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="top64 h-24 flex justify-between items-center px-6 bg-sky-900 text-white">
        <div onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}>
          <FaBars className="h-6 w-6 cursor-pointer" />
        </div>
        <p>Sign Out</p>
      </div>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </>
  );
};

export default Navbar;
