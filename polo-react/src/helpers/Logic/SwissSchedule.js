const swissSchedule = (teams, roundNumber) => {
  const groups = [];
  const matchesArray = [];
  let counter = 1;
  let groupCounter = 1;

  for (let i = 0; i < roundNumber; i++) {
    groups.push([]);
  }

  teams.map((team) => {
    groups[team.wins].push(team);
  });

  groups.map((group) => {
    for (let i = 0; i < group.length; i = i + 2) {
      const match = {
        match_id: counter,
        round: roundNumber,
        team1Name: group[i].team_name,
        team1ID: group[i].team_id,
        team2Name: group[i + 1].team_name,
        team2ID: group[i + 1].team_id,
      };
      matchesArray.push(match);
      counter++;
    }
    groupCounter++;
  });

  return matchesArray;
};

export default swissSchedule;
