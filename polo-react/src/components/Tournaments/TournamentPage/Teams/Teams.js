import React, { useEffect, useState } from "react";
import Team from "./Team";
import Group from "./Group";

const Teams = ({ teams, groups, format, tournament_id }) => {
  return format === "Round Robin"
    ? groups.map((group, i) => {
        return (
          group.length > 0 && (
            <section className="groups-header" key={i}>
              <h1>GROUP {group[0].group_id}</h1>
              <div className="groups">
                {group.map((team, i) => {
                  return (
                    <section className="team" key={i}>
                      <Team
                        team={team}
                        tournament_id={tournament_id}
                        // removeTeam={removeTeam}
                      />
                    </section>
                  );
                })}
              </div>
            </section>
          )
        );
      })
    : teams.map((team, i) => {
        return (
          <section className="team" key={i}>
            <Team team={team} tournament_id={tournament_id} />
          </section>
        );
      });
};

export default Teams;
