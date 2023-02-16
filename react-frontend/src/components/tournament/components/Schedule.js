const Schedule = ({ teams, matches }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.values(matches).map((group, i) => (
        <div key={i} className="border-2">
          {group.map((match) => (
            <div key={match.id} className="flex flex-wrap w-72 justify-center">
              <p>{teams[match.team_1_id].name}</p>
              <p className="mx-2">V</p>
              <p>{teams[match.team_2_id].name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Schedule;
