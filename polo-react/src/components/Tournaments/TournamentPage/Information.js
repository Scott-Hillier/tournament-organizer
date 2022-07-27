import React from "react";

const Information = ({ tournament }) => {
  const { id, tournament_name, location, description, start_date, end_date } =
    tournament;

  const startDate = new Date(start_date);
  const endDate = new Date(end_date);

  return (
    <section className="information">
      <br />
      <h1>{tournament_name}</h1>
      <br />
      <h3>{location}</h3>
      <h3>{description}</h3>
      <h3>{startDate.toDateString()}</h3>
      <h3>{endDate.toDateString()}</h3>
      {/* <h3>{format}</h3>
      <h3>{number_of_groups}</h3> */}
      <br />
    </section>
  );
};

export default Information;
