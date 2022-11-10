import React from "react";
import Group from "./Group";

const Groups = ({ teams, groups, format, tournament_id }) => {
  return groups.map((group, i) => {
    return (
      group.length > 0 && (
        <section className="groups-header" key={i}>
          <h1>GROUP {group[0].group_id}</h1>
          <div className="groups">
            <Group group={group} tournament_id={tournament_id} />
          </div>
        </section>
      )
    );
  });
};

export default Groups;
