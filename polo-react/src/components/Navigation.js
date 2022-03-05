import { Link } from "react-router-dom";
import "../styles/Navigation.scss";
import Menu from "./Menu";

const Navigation = () => {
  const close = () => {
    document.getElementsByClassName("sidebar").style.display = "none";
  };

  return (
    <main className="container">
      <Menu />
      <section className="navigation">
        <i className="fa-solid fa-bars"></i>
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
