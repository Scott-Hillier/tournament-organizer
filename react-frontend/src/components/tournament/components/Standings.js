const Standings = ({ groupOrder, teams, groups }) => {
  const sortByWins = (a, b) => {
    return teams[b].wins - teams[a].wins;
  };
  return (
    <>
      <div>STANDINGS</div>
      <div className="flex flex-wrap justify-center">
        {groupOrder.map((groupId) => {
          return (
            <div key={groupId} className="flex flex-col">
              {console.log(groups[groupId].teamIds.sort(sortByWins))}
              {groups[groupId].teamIds.sort(sortByWins).map((teamId) => {
                return (
                  <div>
                    {teams[teamId].name} {teams[teamId].wins}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Standings;
