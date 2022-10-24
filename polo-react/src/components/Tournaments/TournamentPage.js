import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addTeam,
  getTournamentInfo,
  getTournamentTeams,
  getTournamentPlayers,
} from "../../helpers/apiHelpers";
import Information from "./TournamentPage/Information";
import Teams from "./TournamentPage/Teams/Teams";
import AddTeam from "./TournamentPage/Options/AddTeam";
import CreateGroups from "./TournamentPage/Options/CreateGroups";
import Schedule from "./TournamentPage/Schedule/Schedule";
import splitGroups from "../../helpers/Logic/splitGroups.js";
import GenerateSchedule from "./TournamentPage/Options/GenerateSchedule";

import "../../styles/Tournaments/TournamentPage.scss";

const DEFAULT = "DEFAULT";
const ADD = "ADD";
const GROUPS = "GROUPS";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [playersState, setPlayersState] = useState([]);
  const [teamsState, setTeamsState] = useState([]);
  const [groupsState, setGroupsState] = useState([]);
  const [newTeamState, setNewTeamState] = useState({
    teamName: "",
    player1: "",
    player2: "",
    player3: "",
    group: 0,
  });
  const [pageState, setPageState] = useState(DEFAULT);

  const { tournament_id } = useParams();
  const teamGroupsArray = [];
  const scheduleGroupsArray = [];
  const roundsArray = [];
  let format = "";
  let round = 0;

  useEffect(() => {
    getTournamentInfo(tournament_id)
      .then((res) => {
        setTournamentState(res.data[0]);
        for (let i = 0; i < res.data[0].number_of_groups; i++) {
          teamGroupsArray.push([]);
          scheduleGroupsArray.push([]);
        }
        for (let i = 0; i < res.data[0].round_number; i++) {
          roundsArray.push([]);
        }
        format = res.data[0].format;
        round = res.data[0].round_number;
      })
      .then(() => {
        getTournamentTeams(tournament_id).then((res) => {
          setTeamsState(res.data);
          setGroupsState(splitGroups(teamGroupsArray, res.data));
        });
        getTournamentPlayers(tournament_id).then((res) => {
          setPlayersState(res.data);
        });
      });
  }, []);

  return (
    <main className="tournament-page">
      <section className="information">
        <Information tournament={tournamentState} />
        <br />
      </section>
      <section className="teams">
        <h1>Teams</h1>
        <Teams
          teams={teamsState}
          groups={groupsState}
          format={tournamentState.format}
          tournament_id={tournament_id}
        />
      </section>
      <section>
        <h1>Schedule</h1>
        <Schedule
          teams={teamsState}
          groups={groupsState}
          format={tournamentState.format}
          tournament_id={tournament_id}
          numberOfGroups={tournamentState.number_of_groups}
        />
      </section>
      <section className="tournament-edit">
        <section>
          <button
            onClick={(e) => {
              e.preventDefault();
              setPageState(ADD);
            }}
          >
            Add Team
          </button>
          {tournamentState.format === "Round Robin" && (
            <button
              onClick={(e) => {
                e.preventDefault();
                setPageState(GROUPS);
              }}
            >
              Place Teams Into Groups
            </button>
          )}
        </section>

        <br />
        {pageState === ADD && (
          <AddTeam
            tournament_id={tournament_id}
            newTeamState={newTeamState}
            setNewTeamState={setNewTeamState}
            addTeam={addTeam}
            format={tournamentState.format}
            numberOfGroups={tournamentState.number_of_groups}
          />
        )}
        {pageState === GROUPS && (
          <CreateGroups tournament_id={tournament_id} teamsState={teamsState} />
        )}
      </section>
      <br />
    </main>
  );
};

export default TournamentPage;
