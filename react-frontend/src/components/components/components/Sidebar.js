import classNames from "classnames";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <>
      <div
        className={classNames(
          "z-10 absolute top-0 left-0 w-2/5 max-w-sm h-full bg-sky-900 text-white duration-700",
          { "-ml-96": !sidebar }
        )}
      >
        <p>MENU</p>
      </div>
      <div
        className={classNames(
          "z-9 absolute top-0 left-0 w-full h-full bg-gray-500 opacity-40",
          { hidden: !sidebar }
        )}
        onClick={() => (sidebar ? setSidebar(false) : setSidebar(true))}
      ></div>
    </>
  );
};

export default Sidebar;
