import React, { useState } from "react";
import { selectWinner } from "../../../helpers/apiHelpers";
import ScheduleSwissMatches from "./ScheduleSwissMatches";
import "../../../styles/Tournaments/Schedule/ScheduleSwiss.scss";

const ScheduleSwissRounds = ({ round, tournament_id }) => {
  return (
    <section className="schedule-groups">
      <h2>Round Matches</h2>
      {round.map((match, i) => {
        return (
          <ScheduleSwissMatches
            key={i}
            match={match}
            tournament_id={tournament_id}
          />
        );
      })}
      <br />
    </section>
  );
};

export default ScheduleSwissRounds;
