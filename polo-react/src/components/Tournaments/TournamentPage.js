import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  addTeam,
  getTournamentInfo,
  getTournamentTeams,
  createGroups,
  getTournamentSchedule,
  createGroupSchedule,
  createSwissSchedule,
} from "../../helpers/apiHelpers";
import Information from "./TournamentPage/Information";
import Teams from "./TournamentPage/Teams/Teams";
import Schedule from "./TournamentPage/Schedule/Schedule";
import swissRounds from "../../helpers/Logic/SwissRounds";
import splitGroups from "../../helpers/Logic/splitGroups.js";

import "../../styles/Tournaments/TournamentPage.scss";

const DEFAULT = "DEFAULT";
const ADD = "ADD";
const GROUPS = "GROUPS";
const EMPTY = "EMPTY";
const FULL = "FULL";
const SAVE = "SAVE";
const GENERATE = "GENERATE";

const TournamentPage = () => {
  const [tournamentState, setTournamentState] = useState({});
  const [tournamentTeamsState, setTournamentTeamsState] = useState([]);
  const [tournamentGroupsState, setTournamentGroupsState] = useState([]);
  const [newTeamState, setNewTeamState] = useState({
    teamName: "",
    player1: "",
    player2: "",
    player3: "",
  });
  const [pageState, setPageState] = useState(DEFAULT);
  const [groupState, setGroupState] = useState({
    numberOfGroups: 0,
    random: false,
  });
  const [scheduleState, setScheduleState] = useState([]);
  const [scheduleGeneratedState, setScheduleGeneratedState] = useState(EMPTY);

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
          setTournamentTeamsState(res.data);
          setTournamentGroupsState(splitGroups(teamGroupsArray, res.data));
        });
      })
      .then(() => {
        getTournamentSchedule(tournament_id, format).then((res) => {
          res.data.length > 0
            ? setScheduleGeneratedState(FULL)
            : setScheduleGeneratedState(EMPTY);
          format === "Round Robin"
            ? setScheduleState(splitGroups(scheduleGroupsArray, res.data))
            : setScheduleState(swissRounds(res.data, round));
        });
      });
  }, []);

  const startDate = new Date(tournamentState?.start_date);
  const endDate = new Date(tournamentState?.end_date);

  return (
    <main className="tournament-page">
      <section className="tournament-page-info">
        <Information tournament={tournamentState} />
        <br />
      </section>
      <section className="teams">
        <Teams
          teams={tournamentTeamsState}
          groups={tournamentGroupsState}
          format={tournamentState.format}
        />
      </section>
      {scheduleGeneratedState === FULL && (
        <Schedule
          schedule={scheduleState}
          teams={tournamentTeamsState}
          groups={tournamentGroupsState}
          format={tournamentState.format}
        />
      )}
      {scheduleGeneratedState === EMPTY && (
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
          <button
            onClick={(e) => {
              e.preventDefault();
              tournamentState.format === "Round Robin"
                ? createGroupSchedule(tournament_id, tournamentGroupsState)
                : createSwissSchedule(
                    tournament_id,
                    tournamentTeamsState,
                    tournamentState.round_number
                  );
              window.location.reload();
            }}
          >
            Generate Schedule
          </button>
        </section>
      )}
      <br />
      {pageState === ADD && (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addTeam(tournament_id, newTeamState);
            window.location.reload();
          }}
        >
          <input
            placeholder="Team Name"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, teamName: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 1"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player1: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 2"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player2: e.target.value };
              });
            }}
            required
          />
          <input
            placeholder="Player 3"
            className="add-team"
            onChange={(e) => {
              setNewTeamState((prev) => {
                return { ...prev, player3: e.target.value };
              });
            }}
            required
          />
          <button type="Submit">Add Team</button>
        </form>
      )}
      {pageState === GROUPS && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createGroups(
              tournament_id,
              tournamentTeamsState,
              groupState.numberOfGroups,
              groupState.random
            );
            window.location.reload();
          }}
        >
          <input
            placeholder="Number of Groups"
            type={"number"}
            onChange={(e) => {
              setGroupState((prev) => {
                return { ...prev, numberOfGroups: e.target.value };
              });
            }}
            required
          />
          <p>Random?</p>
          <input
            type={"checkbox"}
            onChange={(e) => {
              if (groupState.random === false) {
                setGroupState((prev) => {
                  return { ...prev, random: true };
                });
              } else {
                setGroupState((prev) => {
                  return { ...prev, random: false };
                });
              }
            }}
          ></input>
          <button>Make Groups</button>
        </form>
      )}
    </main>
  );
};

export default TournamentPage;
