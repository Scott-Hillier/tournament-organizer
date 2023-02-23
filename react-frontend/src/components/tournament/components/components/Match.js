import classNames from "classnames";

const Match = ({ match, teams, index, winners, setWinners }) => {
  return (
    <>
      <div className="text-center font-bold">Match {match.match_id}</div>
      <div
        className={classNames(
          "justify-center text-center items-center",
          "mb-4  border-black rounded"
        )}
      >
        <p
          className={classNames("p-1 mb-1 border-2 rounded-xl cursor-pointer", {
            "bg-red-900 text-white opacity-50":
              winners[match.id] === match.team_1_id,
            "bg-cyan-900 text-white": match.winner === match.team_1_id,
          })}
          onClick={() => {
            if (match.winner !== match.team_1_id) {
              setWinners({ ...winners, [match.id]: match.team_1_id });
            }
          }}
        >
          {teams[match.team_1_id].name}
        </p>
        <p
          className={classNames("p-1 mb-4 border-2 rounded-xl cursor-pointer", {
            "bg-cyan-900 text-white": match.winner === match.team_2_id,
            "bg-red-900 text-white opacity-50":
              winners[match.id] === match.team_2_id,
          })}
          onClick={() => {
            if (match.winner !== match.team_2_id) {
              setWinners({ ...winners, [match.id]: match.team_2_id });
            }
          }}
        >
          {teams[match.team_2_id].name}
        </p>
        <div className="border-b-2 border-black" />
      </div>
    </>
  );
};

export default Match;
