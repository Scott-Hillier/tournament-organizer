import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
} from "../../helpers/apiHelpers";
import RoundRobin from "../../helpers/Logic/RoundRobin";

const TournamentSchedule = () => {
  const [tournamentState, setTournamentState] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournamentInfo(tournament_id).then((res) => {
      setTournamentState(res.data[0]);
    });
    getTournamentTeams(tournament_id).then((res) => {
      setTournamentState((prev) => {
        return { ...prev, teams: res.data };
      });
    });
  }, []);

  const teams = tournamentState?.teams || [];

  const groupsArray = RoundRobin(teams, 2);

  console.log(groupsArray);

  return (
    <section>
      <h1>TOURNAMENT SCHEDULE</h1>
    </section>
  );
};

export default TournamentSchedule;
