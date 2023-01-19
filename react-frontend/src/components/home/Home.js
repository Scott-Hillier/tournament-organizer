import { useEffect, useState, useMemo } from "react";
import { getTournaments } from "../../routes/apiHelpers";
import TournamentCard from "./components/TournamentCard";

const Home = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    getTournaments().then((res) => {
      setTournaments(res.data);
    });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-slate-200 overscroll-none">
        <div className="pt-24 pb-8 flex-col justify-center">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
