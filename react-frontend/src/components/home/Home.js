import { useEffect, useState } from "react";
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
      <div className="min-h-screen bg-slate-200 overscroll-none justify-center">
        <div className="pt-24 pb-8 flex flex-col items-center">
          {tournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
