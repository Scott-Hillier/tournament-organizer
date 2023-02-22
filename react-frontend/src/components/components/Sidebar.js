import classNames from "classnames";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      <div
        className={classNames(
          "z-10 fixed top-0 left-0 w-2/5 max-w-sm h-full",
          "bg-cyan-800 text-white",
          "duration-500",
          "flex justify-center",
          { "-ml-96": !sidebar }
        )}
      >
        <div className="mt-4 font-mono font-bold text-xl text-center">
          <ul>
            <li className="m-4">
              <Link
                to={"/"}
                onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
              >
                Home
              </Link>
            </li>
            <li className="m-4">
              <Link
                to={"/organize"}
                onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
              >
                Organize
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={classNames("z-9 fixed top-0 left-0 w-full h-full", {
          hidden: !sidebar,
        })}
        onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
      ></div>
    </>
  );
};

export default Sidebar;
