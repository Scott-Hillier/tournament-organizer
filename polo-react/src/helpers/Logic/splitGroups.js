const splitGroups = (numberOfGroups, teamsArray) => {
  const groupsArray = [];

  for (let i = 0; i < numberOfGroups; i++) {
    groupsArray.push([]);
  }

  console.log("info", numberOfGroups, teamsArray);

  return groupsArray;
};

export default splitGroups;
