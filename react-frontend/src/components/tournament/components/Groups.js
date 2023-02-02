import Team from "./components/Team";

const Groups = ({ teams }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p>Groups</p>
        <div className="flex flex-wrap w-5/6 max-w-7xl justify-center">
          {teams.map((team) => {
            return <Team team={team} key={team.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Groups;
