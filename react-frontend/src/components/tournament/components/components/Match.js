const Match = ({ match }) => {
  return (
    <>
      <div className="flex flex-col my-1">
        <div className="font-semibold">Match {match.match_id}</div>
        <div className="flex justify-center">
          <p>{match.team_1_name}</p>
          <p className="px-2">VS</p>
          <p>{match.team_2_name}</p>
        </div>
      </div>
    </>
  );
};

export default Match;
