import React, { useEffect, useState } from "react";
import { getTournamentGroups } from "../../helpers/apiHelpers";
import roundRobin from "../../helpers/Logic/RoundRobin";

const TournamentGroups = ({ group, tournamentTeamsState }) => {
  // const [groupsState, setGroupsState] = useState([]);

  // useEffect(() => {
  //   getTournamentGroups(tournament.id);
  // }, []);

  console.log("teams", tournamentTeamsState);
  console.log("group", group);

  return (
    <div>
      <h1>Group</h1>
      <h3>{group.team_1}</h3>
    </div>
    // <div>
    //   {groupsState.map((group, i) => {
    //     return <h1> {group[0]?.team_name}</h1>;
    //   })}
    // </div>
  );
};

export default TournamentGroups;
