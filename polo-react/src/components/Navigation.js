import { Link } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  const open = () => {
    document.getElementsByClassName("sidebar").style.display = "flex";
  };

  const close = () => {
    document.getElementsByClassName("sidebar").style.display = "none";
  };

  return (
    <main>
      <section className="sidebar">
        <button>X Close</button>
      </section>
      <section className="navigation">
        <i className="fa-solid fa-bars"></i>
        <i className="fa-regular fa-bracket-curly-right"></i>
        <li className="menu">
          <button>Account</button>
          <ul className="submenu">
            <li>
              <Link to={`/login`} type="button" className="login">
                Login
              </Link>
            </li>
            <li>
              <Link to={`/register`} type="button" className="register">
                Register
              </Link>
            </li>
            <li>
              <Link to={`/`} type="button" className="logout">
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </section>
    </main>
  );
};

export default Navigation;
