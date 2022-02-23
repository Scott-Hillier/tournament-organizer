import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import { getAllTournaments } from "../helpers/apiHelpers";

const Home = () => {
  const search = (string) => {};

  return (
    <main>
      <section className="search">
        <input
          className="search-bar"
          placeholder="Search by tournament"
          size={"25"}
        ></input>
        <button className="search-button">Find!</button>
      </section>
      <section className="organize">
        <h2>Want to organize a tournament now?</h2>
        <Link to={`/organize`} type="button" className="organize-button">
          Organize
        </Link>
      </section>
      <section className="upcoming-tournaments">
        <h2>Tournaments happening soon!</h2>
        <button onClick={getAllTournaments()}>Find one near you!</button>
      </section>
    </main>
  );
};

export default Home;
