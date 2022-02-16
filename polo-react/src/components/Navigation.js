import { Link } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <section className="navigation">
      <ul class="menu">
        <li>
          <button>Account</button>
          <ul class="submenu">
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
      </ul>
    </section>
  );
};

export default Navigation;
