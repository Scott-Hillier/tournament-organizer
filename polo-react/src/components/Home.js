import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.scss";
import { searchTournaments } from "../helpers/apiHelpers";

const Home = () => {
  const [searchState, setSearchState] = useState("");

  return (
    <main>
      <form className="search">
        <input
          className="search-bar"
          placeholder="Search by tournament"
          onChange={(event) => {
            event.preventDefault();
            setSearchState(event.target.value);
            console.log(event.target.value);
          }}
        ></input>
        <button className="search-button">Find!</button>
      </form>
      <section className="organize">
        <h2>Want to organize a tournament now?</h2>
        <Link to={`/organize`} type="button" className="organize-button">
          Organize
        </Link>
      </section>
      <section className="upcoming-tournaments">
        <h2>Tournaments happening soon!</h2>
        <button>Find one near you!</button>
      </section>
    </main>
  );
};

export default Home;
