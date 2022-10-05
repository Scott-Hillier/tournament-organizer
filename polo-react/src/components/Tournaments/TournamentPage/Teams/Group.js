import React from "react";
import Team from "./Team";

const Group = ({ group, tournament_id }) => {
  return group.map((team, i) => {
    return (
      <section className="team" key={i}>
        <Team team={team} tournament_id={tournament_id} />
      </section>
    );
  });
};

export default Group;
