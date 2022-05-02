import React from "react";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";

const TournamentGroupsSchedule = ({ group }) => {
  // console.log(group);
  GroupsSchedule(group);
  return <section className="group-matches">Match Box</section>;
};

export default TournamentGroupsSchedule;
