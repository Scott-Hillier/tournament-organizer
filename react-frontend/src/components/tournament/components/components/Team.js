const Team = ({ team }) => {
  return (
    <>
      <div className="flex flex-col p-2 items-center">
        <p>{team.team_name}</p>
        <div className="flex">
          <p>{team.player1}</p>
          <p className="px-2">{team.player2}</p>
          <p>{team.player3}</p>
        </div>
      </div>
    </>
  );
};

export default Team;
