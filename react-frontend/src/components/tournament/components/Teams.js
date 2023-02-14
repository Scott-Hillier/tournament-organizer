import classNames from "classnames";
import Team from "./components/Team";
import { setGroups } from "../../../routes/apiHelpers";

const Teams = ({ tournament_id, teams, number_of_groups }) => {
  const setGroupIds = () => {
    let num = 0;
    const teamsArray = [];
    Object.keys(teams).forEach((team) => {
      teams[team].group_id = num;
      num++;
      if (num === number_of_groups) {
        num = 0;
      }
      teamsArray.push(teams[team]);
    });
    setGroups(tournament_id, teamsArray);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-wrap w-full max-w-7xl justify-around">
          {Object.keys(teams).map((team) => (
            <Team key={teams[team].id} team={teams[team]} />
          ))}
        </div>
      </div>

      <button
        className="mt-4 border-2 p-1 rounded"
        onClick={() => {
          setGroupIds();
          window.location.reload();
        }}
      >
        Create Groups
      </button>
    </>
  );
};

export default Teams;
