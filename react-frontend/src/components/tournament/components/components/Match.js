import classNames from "classnames";

const Match = ({ match, teams, index, winners, setWinners }) => {
  return (
    <>
      <div className="text-center">Match {match.match_id}</div>
      <div
        className={classNames(
          "justify-center text-center items-center",
          "m-2 p-2 border border-black rounded"
        )}
      >
        <p
          className={classNames("p-1 border-2 rounded", {
            "bg-green-100":
              match.winner === match.team_1_id ||
              winners[match.id] === match.team_1_id,
          })}
          onClick={() =>
            setWinners({ ...winners, [match.id]: match.team_1_id })
          }
        >
          {teams[match.team_1_id].name}
        </p>
        <p className="mx-2">V</p>
        <p
          className={classNames("p-1 border-2 rounded", {
            "bg-green-100":
              match.winner === match.team_2_id ||
              winners[match.id] === match.team_2_id,
          })}
          onClick={() =>
            setWinners({ ...winners, [match.id]: match.team_2_id })
          }
        >
          {teams[match.team_2_id].name}
        </p>
      </div>
    </>
  );
};

export default Match;
