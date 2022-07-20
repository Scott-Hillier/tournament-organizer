import React from "react";
import { removeTeam } from "../../../../helpers/apiHelpers";

const Team = ({ team, tournament_id }) => {
  const {
    group_id,
    team_id,
    team_name,
    player1,
    player2,
    player3,
    player4,
    player5,
    player6,
  } = team;

  return (
    <section className="team-info">
      <header className="team-header">
        <h1>{team_name}</h1>
        <button
          onClicK={() => {
            removeTeam(tournament_id, team_id);
          }}
        >
          X
        </button>
      </header>
      <br />
      <h2>Slayers</h2>
      <h3>{player1}</h3>
      <h3>{player2}</h3>
      <h3>{player3}</h3>
      <h3>{player4}</h3>
      <h3>{player5}</h3>
      <h3>{player6}</h3>
      <br />
      <h3>{group_id}</h3>
    </section>
  );
};

export default Team;
