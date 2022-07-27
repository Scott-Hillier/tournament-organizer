import React from "react";
import GroupMatches from "./GroupMatches";
import Match from "./Match";
import "../../../../styles/Tournaments/Schedule/Schedule.scss";

const Schedule = ({ schedule, teams, groups, format, tournament_id }) => {
  return schedule.map((group, i) => {
    return (
      <section className="group" key={i}>
        <GroupMatches
          group={group}
          format={format}
          tournament_id={tournament_id}
        />
      </section>
    );
  });
};

export default Schedule;
