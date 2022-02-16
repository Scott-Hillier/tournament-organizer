import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section className="search">
        <input placeholder="Search by tournament"></input>
        <button>Search</button>
      </section>
      <section className="organize">
        <h2>Want to organize a tournament now?</h2>
        <Link to={`/organize`} type="button" className="organize">
          Organize
        </Link>
      </section>
    </main>
  );
};

export default Home;
