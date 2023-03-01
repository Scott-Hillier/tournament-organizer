import classNames from "classnames";

const Match = ({ match, teams, matchResults, setMatchResults }) => {
  return (
    <>
      <div className="text-center font-bold">Match {match.match_id}</div>
      <div
        className={classNames(
          "text-center items-center",
          "w-72 mb-4 border-b-2 border-black rounded"
        )}
      >
        <div className="flex justify-between items-center">
          <p
            className={classNames(
              "w-52 p-1 mb-1 border-2 rounded-xl cursor-pointer break-all",
              {
                "bg-cyan-900 text-white": match.winner === match.team_1_id,
              }
            )}
          >
            {teams[match.team_1_id].name}
          </p>
          <input
            type={"number"}
            className="w-14 h-10 border-2 rounded text-center"
            placeholder={match.team_1_score ? `${match.team_1_score}` : ``}
            onChange={(e) => {
              setMatchResults({
                ...matchResults,
                [match.id]: {
                  ...matchResults[match.id],
                  team1Id: match.team_1_id,
                  team1Score: Number(e.target.value),
                },
              });
            }}
          ></input>
        </div>
        <div className="flex justify-between">
          <p
            className={classNames(
              "w-52 p-1 mb-4 border-2 rounded-xl cursor-pointer break-all",
              {
                "bg-cyan-900 text-white": match.winner === match.team_2_id,
              }
            )}
          >
            {teams[match.team_2_id].name}
          </p>
          <input
            type={"number"}
            className="w-14 h-10 border-2 rounded text-center text-black"
            placeholder={match.team_2_score ? `${match.team_2_score}` : ``}
            onChange={(e) => {
              setMatchResults({
                ...matchResults,
                [match.id]: {
                  ...matchResults[match.id],
                  team2Id: match.team_2_id,
                  team2Score: Number(e.target.value),
                },
              });
            }}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Match;
