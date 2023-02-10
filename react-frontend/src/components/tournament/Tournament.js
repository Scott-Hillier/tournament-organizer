import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournament } from "../../routes/apiHelpers";
import Information from "./components/Information";
import Teams from "./components/Teams";
import Group from "./components/Group";
import Schedule from "./components/Schedule";

const Tournament = () => {
  const [tournament, setTournament] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournament(tournament_id).then((res) => {
      setTournament(res);
    });
  }, [tournament_id]);

  console.log(tournament);

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-8">
        {tournament.info && (
          <div className="flex flex-col items-center">
            <Information info={tournament.info} />

            {tournament.groups["group-null"] ? (
              <Teams
                tournament_id={tournament_id}
                teams={tournament.teams}
                number_of_groups={tournament.info.number_of_groups}
              />
            ) : (
              tournament.groupOrder.map((groupId) => {
                const group = tournament.groups[groupId];
                const groupTeams = group.teamIds.map(
                  (teamId) => tournament.teams[teamId]
                );
                return (
                  <Group key={group.id} teamIds={groupTeams} group={group} />
                );
              })
            )}
            {/* {tournament.teams[1].id > 0 && (
              <Schedule
                tournament_id={tournament_id}
                teams={tournament.teams}
                matches={tournament.matches}
                number_of_groups={tournament.info.number_of_groups}
              />
            )} */}
          </div>
        )}
      </div>
    </>
  );
};
export default Tournament;
