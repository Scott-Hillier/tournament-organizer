import match from "nodemon/lib/monitor/match";
import React, { useEffect, useState } from "react";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";

const TournamentGroupsSchedule = ({ group }) => {
  const matchesArray = GroupsSchedule(group);
  // console.log(matchesArray);
  return <section className="group-matches">Match Box</section>;
};

export default TournamentGroupsSchedule;
