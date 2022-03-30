import React, { useEffect, useState } from "react";
import { getTournamentGroups } from "../../helpers/apiHelpers";
import roundRobin from "../../helpers/Logic/RoundRobin";

const TournamentGroups = ({ teamsArray, numberOfGroups }) => {
  const [groupState, setGroupState] = useState([]);

  console.log(teamsArray);
  console.log(numberOfGroups);

  useEffect(() => {
    setGroupState(roundRobin(teamsArray, numberOfGroups, false));
  }, [teamsArray]);

  const groups = roundRobin(teamsArray, numberOfGroups, false);
  console.log(groups);

  return (
    <div>
      <h1>Group</h1>
    </div>
  );
};

export default TournamentGroups;
