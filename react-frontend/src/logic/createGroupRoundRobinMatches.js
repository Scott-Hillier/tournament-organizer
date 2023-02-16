const createGroupRoundRobinMatches = (groups) => {
  const newGroups = groups;
  const matchesPerTeam = groups["group-0"].teamIds.length - 1;
  const matches = {};

  const exampleGroup = {
    "group-0": {
      id: "group-0",
      teamsIds: ["team-1", "team-2", "team-3"],
    },
    "group-1": {
      id: "group-1",
      teamsIds: ["team-7", "team-8", "team-9"],
    },
  };

  Object.values(newGroups).forEach((group) => {
    if (group.teamIds.length % 2 !== 0) {
      group.teamIds.push(`bye`);
    }

    const matchesArray = [];
    const set1 = group.teamIds.slice(0, group.teamIds.length / 2);
    const set2 = group.teamIds.slice(group.teamIds.length / 2);
    let counter = 1;

    for (let i = 0; i <= matchesPerTeam; i++) {
      for (let j = 0; j < set2.length; j++) {
        const match = {
          matchId: counter,
          groupId: Number(group.id[group.id.length - 1]),
          team1Id: set1[j],
          team2Id: set2[j],
        };
        matchesArray.push(match);
        counter++;
      }
      set2.push(set1[set1.length - 1]);
      set1.pop();
      set1.splice(1, 0, set2[0]);
      set2.shift();
    }

    matches[group.id] = matchesArray;
  });

  return matches;
};

export default createGroupRoundRobinMatches;
