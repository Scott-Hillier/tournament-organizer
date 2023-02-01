import Team from "./components/Team";

const Teams = ({ teams }) => {
  console.log(teams);
  return (
    <>
      <div className="flex-col items-center">
        <p>Teams</p>
        <div className="flex flex-wrap">
          {teams.map((team) => {
            return <Team team={team} key={team.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Teams;
