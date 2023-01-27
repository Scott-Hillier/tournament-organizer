import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTournament } from "../../routes/apiHelpers";

const Tournament = () => {
  const [tournament, setTournament] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournament(tournament_id).then((res) => {
      setTournament(res);
    });
  }, []);

  const { info, teams } = tournament;

  return (
    <>
      <div className="min-h-screen bg-slate-200 overscroll-none justify-center">
        {tournament.info && (
          <div className="pt-24 pb-8">
            <div className="flex flex-col items-center">
              <p>{info.name}</p>
              <p>{info.location}</p>
              <p>
                {new Date(info.start_date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                {new Date(info.end_date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>{info.description}</p>
              <p>Format: {info.format}</p>
              <p>Teams: {info.squad ? "Squad" : "3v3"}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tournament;
