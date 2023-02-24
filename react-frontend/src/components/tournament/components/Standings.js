const Standings = ({ groupOrder, teams, groups }) => {
  const sortByWins = (a, b) => {
    return teams[b].wins - teams[a].wins;
  };
  return (
    <div className="flex flex-wrap w-full justify-center my-4">
      {groupOrder.map((groupId) => {
        return (
          <div
            key={groupId}
            className="flex flex-col w-64 mx-20 m-2 p-1 border-2 border-black rounded"
          >
            <div className="flex justify-between p-1 border-b border-black font-bold">
              <p>Team</p>
              <p>Wins</p>
            </div>
            {groups[groupId].teamIds.sort(sortByWins).map((teamId) => {
              return (
                <div className="flex justify-between p-1 break-all border-b">
                  <p className="w-40">{teams[teamId].name}</p>
                  <p>{teams[teamId].wins}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Standings;
