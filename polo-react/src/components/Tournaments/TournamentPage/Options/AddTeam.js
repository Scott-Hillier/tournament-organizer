import React from "react";

const AddTeam = ({
  tournament_id,
  newTeamState,
  setNewTeamState,
  addTeam,
  format,
  numberOfGroups,
}) => {
  const groups = [];
  for (let i = 1; i <= numberOfGroups; i++) {
    groups.push(i);
  }
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
      <select name="group">
        <option value={""}>Please Select A Group</option>
        {groups.map((group, i) => {
          return (
            <option value={group} key={i}>
              {group}
            </option>
          );
        })}
      </select>
      <button type="Submit">Add Team</button>
    </form>
  );
};

export default AddTeam;
