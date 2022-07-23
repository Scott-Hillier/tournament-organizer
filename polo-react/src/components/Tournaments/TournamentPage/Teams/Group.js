import React from "react";
import Team from "./Team";

const Group = ({ group, tournament_id }) => {
  return group.map((team, i) => {
    return (
      <div className="team" key={i}>
        <Team team={team} tournament_id={tournament_id} />
      </div>
    );
  });
};

export default Group;
