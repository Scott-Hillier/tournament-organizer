import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
} from "../../helpers/apiHelpers";
import RoundRobin from "../../helpers/Logic/RoundRobin";

const TournamentGroups = () => {
  return (
    <section>
      <h1>TOURNAMENT SCHEDULE</h1>
    </section>
  );
};

export default TournamentGroups;
