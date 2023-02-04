import createGroupRoundRobin from "../../../logic/createGroupRoundRobin";
import createGroupsArray from "../../../logic/createGroupsArray";
import createMatchesArray from "../../../logic/createMatchesArray";
import createSchedule from "../../../routes/apiHelpers";
import Match from "./components/Match";

const Schedule = ({ tournament_id, teams, matches, number_of_groups }) => {
  const groups = createGroupsArray(teams, number_of_groups);

  const groupsMatches = createMatchesArray(matches, number_of_groups);

  return (
    <>
      {teams[1].group_id && !matches.length && (
        <button
          className="mt-4 border-2 p-1 rounded"
          onClick={() => {
            createSchedule(tournament_id, createGroupRoundRobin(groups));
            window.location.reload();
          }}
        >
          Create Schedule
        </button>
      )}
      {matches.length && (
        <div className="flex flex-col items-center w-full">
          <p>Schedule</p>
          <div className="flex flex-wrap w-full max-w-7xl justify-around">
            {groupsMatches.map((groupMatches, i) => {
              return (
                <div className="w-96 m-4 border-2 text-center" key={i}>
                  {groupMatches.map((match) => {
                    return <Match key={match.match_id} match={match} />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Schedule;
