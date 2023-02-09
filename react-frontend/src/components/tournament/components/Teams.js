import classNames from "classnames";
import Team from "./components/Team";
import createGroupsArray from "../../../logic/createGroupsArray";
import { setGroups } from "../../../routes/apiHelpers";

const Teams = ({ tournament_id, teams, number_of_groups }) => {
  const groups = createGroupsArray(teams, number_of_groups);

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
      <div className="flex flex-col items-center w-full">
        {teams[1].group_id === 0 && <p>Teams</p>}
        <div className="flex flex-wrap w-full max-w-7xl justify-around">
          {groups.map((group, i) => {
            return (
              <div className="flex flex-col items-center">
                <p className="font-bold">GROUP {i + 1}</p>
                <div
                  className={classNames(
                    "flex flex-col w-96 my-2 items-center",
                    "border border-black rounded-lg",
                    "bg-slate-100"
                  )}
                  key={i}
                >
                  <div className="flex flex-wrap justify-center">
                    {group.map((team) => {
                      return <Team team={team} key={team.id} />;
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {!teams[1].group_id && (
        <button
          className="mt-4 border-2 p-1 rounded"
          onClick={() => {
            setGroupIds();
            window.location.reload();
          }}
        >
          Create Groups
        </button>
      )}
    </>
  );
};

export default Teams;
