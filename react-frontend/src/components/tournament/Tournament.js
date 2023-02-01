import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournament } from "../../routes/apiHelpers";
import Information from "./components/Information";
import Teams from "./components/Teams";
import Groups from "./components/Groups";

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
          <div>
            <Information info={tournament.info} />
            {tournament.teams[0].group_id ? (
              <Groups teams={tournament.teams} />
            ) : (
              <Teams teams={tournament.teams} />
            )}
          </div>
        )}
        <br />
      </div>
    </>
  );
};
export default Tournament;
