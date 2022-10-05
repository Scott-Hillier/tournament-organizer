import React from "react";

const Add = ({ tournament_id, newTeamState, setNewTeamState, addTeam }) => {
  return (
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
  );
};

export default Add;
