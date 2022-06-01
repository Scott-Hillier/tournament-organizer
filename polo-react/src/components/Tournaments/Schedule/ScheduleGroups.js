import React from "react";
import ScheduleGroupMatches from "./ScheduleGroupMatches";
import GroupsSchedule from "../../../helpers/Logic/GroupsSchedule";
import "../../../styles/Tournaments/Schedule/ScheduleGroups.scss";

const ScheduleGroup = ({ group, tournament_id }) => {
  return (
    <section className="schedule-groups">
      <h2>Group Matches</h2>
      {group.map((match, i) => {
        return <ScheduleGroupMatches key={i} match={match} />;
      })}
      <br />
      <button
      // onClick={(event) => {
      //   event.preventDefault();
      //   randomizeGroupMatches(
      //     tournament_id,
      //     group[0].group_id,
      //     group.sort(() => Math.random() - 0.5)
      //   );
      // }}
      >
        Randomize Matches
      </button>
    </section>
  );
};

export default ScheduleGroup;
