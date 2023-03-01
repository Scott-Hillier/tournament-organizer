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
            className="flex flex-col w-80 m-2 border-2 border-black rounded shadow-lg items-center text-center"
          >
            <div className="flex font-bold my-1">
              <p className="w-40">Team</p>
              <p className="w-20">Wins</p>
              <p className="w-20">Δ</p>
            </div>
            {groups[groupId].teamIds.sort(sortByWins).map((teamId) => {
              return (
                <div
                  key={teamId}
                  className="flex border-t border-black break-all items-center text-center"
                >
                  <p className="w-40 p-1">{teams[teamId].name}</p>
                  <p className="w-20">{teams[teamId].wins}</p>
                  <p className="w-20">{teams[teamId].delta}</p>
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
