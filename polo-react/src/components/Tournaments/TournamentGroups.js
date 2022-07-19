import React, { useEffect, useState } from "react";
import Team from "./TournamentPage/Team";
import "../../styles/Tournaments/TournamentGroups.scss";

const TournamentGroups = ({ group }) => {
  return (
    <div className="groups">
      <h1>Group {group[0].group_id}</h1>
      <div className="group">
        {group.map((team) => {
          return <Team key={team.id} team={team} />;
        })}
      </div>
    </div>
  );
};

export default TournamentGroups;
