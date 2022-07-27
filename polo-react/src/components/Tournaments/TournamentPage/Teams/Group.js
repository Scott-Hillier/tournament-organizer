import React from "react";
import Team from "./Team";

const Group = ({ group, tournament_id, removeTeam }) => {
  return group.map((team, i) => {
    return (
      <section className="team" key={i}>
        <Team
          team={team}
          tournament_id={tournament_id}
          removeTeam={removeTeam}
        />
      </section>
    );
  });
};

export default Group;
