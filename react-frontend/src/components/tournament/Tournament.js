import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournament } from "../../routes/apiHelpers";
import Information from "./components/Information";
import Teams from "./components/Teams";
import Groups from "./components/Groups";
import CreateGroups from "./components/CreateGroups";

const Tournament = () => {
  const [tournament, setTournament] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournament(tournament_id).then((res) => {
      setTournament(res);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-50">
        {tournament.info && (
          <div className="flex flex-col items-center">
            <Information info={tournament.info} />
            {tournament.teams[1].group_id ? (
              <Groups
                teams={tournament.teams}
                numberOfGroups={tournament.info.number_of_groups}
              />
            ) : (
              <Teams teams={tournament.teams} />
            )}
            <CreateGroups
              tournament_id={tournament_id}
              teams={tournament.teams}
              number_of_groups={tournament.info.number_of_groups}
            />
          </div>
        )}
        <br />
      </div>
    </>
  );
};
export default Tournament;
