import { setGroups } from "../../../routes/apiHelpers";

const CreateGroups = ({ tournament_id, teams, number_of_groups }) => {
  const setGroupIds = () => {
    let num = 0;
    teams.forEach((team) => {
      team.group_id = num;
      num++;
      if (num === number_of_groups) {
        num = 0;
      }
    });
    setGroups(tournament_id, teams);
  };

  return (
    <>
      <button
        className="mt-4 border-2 p-1 rounded"
        onClick={() => setGroupIds()}
      >
        Create Groups
      </button>
    </>
  );
};

export default CreateGroups;
