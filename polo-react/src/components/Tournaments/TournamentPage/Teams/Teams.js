import React from "react";
import Team from "./Team";
import Group from "./Group";

const Teams = ({
  teams,
  groupsState,
  format,
  tournament_id,
  numberOfGroups,
}) => {
  const groups = [];

  for (let i = 0; i < numberOfGroups; i++) {
    groups.push([]);
  }

  // getTournamentTeams(tournament_id).then((res) => {
  //   setTeamsState(res.data);
  //   setGroupsState(splitGroups(teamGroupsArray, res.data));
  // });

  console.log(groups);

  return <h1>Groups</h1>;

  // return format === "Round Robin"
  //   ? groups.map((group, i) => {
  //       return (
  //         group.length > 0 && (
  //           <section className="groups-header" key={i}>
  //             <h1>GROUP {group[0].group_id}</h1>
  //             <div className="groups">
  //               <Group group={group} tournament_id={tournament_id} />
  //             </div>
  //           </section>
  //         )
  //       );
  //     })
  //   : teams.map((team, i) => {
  //       return (
  //         <section className="team" key={i}>
  //           <Team team={team} tournament_id={tournament_id} />
  //         </section>
  //       );
  //     });
};

export default Teams;
