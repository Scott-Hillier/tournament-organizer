import classNames from "classnames";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      <div
        className={classNames(
          "z-10 absolute top-0 left-0 w-2/5 max-w-sm h-full",
          "bg-sky-900 text-white",
          "duration-500",
          "flex justify-center",
          { "-ml-96": !sidebar }
        )}
      >
        <div className="text-center">
          <p className="text-xl font-bold border-b-2">MENU</p>
          <ul>
            <li>Home</li>
            <li>Organize</li>
          </ul>
        </div>
      </div>
      <div
        className={classNames("z-9 absolute top-0 left-0 w-full h-full", {
          hidden: !sidebar,
        })}
        onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
      ></div>
    </>
  );
};

export default Sidebar;
