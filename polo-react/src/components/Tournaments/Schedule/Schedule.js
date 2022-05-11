import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTournamentInfo,
  getTournamentTeams,
  createMatches,
  createSchedule,
} from "../../../helpers/apiHelpers";
import splitGroups from "../../../helpers/Logic/splitGroups";
import TournamentGroupsSchedule from "./ScheduleGroups";
import "../../../styles/Tournaments/Schedule/SchedulePage.scss";

const Schedule = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [tournamentGroupState, setTournamentGroupState] = useState([]);

  const { tournament_id } = useParams();
  const groupsArray = [];

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          groupsArray.push([]);
        }
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((response) => {
          setTournamentTeamsState(response.data);
          setTournamentGroupState(splitGroups(groupsArray, response.data));
        });
      });
  }, []);

  return (
    <section className="schedule-page">
      <h1>TOURNAMENT SCHEDULE</h1>

      <section className="tournament-page-teams">
        {tournamentGroupState.map((group, i) => {
          return <TournamentGroupsSchedule key={i} group={group} />;
        })}
      </section>
      <button
        onClick={(e) => {
          e.preventDefault();
          createSchedule(tournament_id, tournamentGroupState);
        }}
      >
        Generate Schedule
      </button>
    </section>
  );
};

export default Schedule;
