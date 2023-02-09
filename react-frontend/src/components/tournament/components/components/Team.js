const Team = ({ team }) => {
  return (
    <>
      <div className="flex flex-col p-2 items-center text-center break-all">
        <p className="font-semibold">{team.team_name}</p>
        <div className="flex flex-wrap justify-center">
          <p>{team.player1}</p>
          <p className="px-2">{team.player2}</p>
          <p>{team.player3}</p>
        </div>
      </div>
    </>
  );
};

export default Team;
