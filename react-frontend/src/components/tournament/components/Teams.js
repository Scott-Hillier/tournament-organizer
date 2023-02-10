import classNames from "classnames";
import Team from "./components/Team";
import createGroupsArray from "../../../logic/createGroupsArray";
import { setGroups } from "../../../routes/apiHelpers";

const Teams = ({ tournament_id, teams, number_of_groups }) => {
  // const groups = createGroupsArray(teams, number_of_groups);

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
          {Object.keys(teams).map((team) => {
            return (
              <div key={team} className="flex flex-col items-center">
                <div
                  className={classNames(
                    "flex flex-col w-96 my-2 items-center",
                    "border border-black rounded-lg",
                    "bg-slate-100"
                  )}
                >
                  <div className="flex flex-wrap justify-center">
                    {teams[team].name}
                  </div>
                </div>
              </div>
            );
          })}
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
