import { useEffect, useState } from "react";
import { getAllTournaments } from "../../helpers/apiHelpers";
import TournamentCards from "./TournamentCards";
import "../../styles/Tournaments/Tournaments.scss";

const Tournaments = () => {
  const [tournamentsState, setTournamentsState] = useState([]);

  useEffect(() => {
    getAllTournaments().then((res) => {
      setTournamentsState(res.data);
    });
  }, []);

  return (
    <main className="tournaments-page">
      <h1>THIS IS THE TOURNAMENT PAGE</h1>
      <section className="tournaments-list">
        {tournamentsState.map((tournament) => {
          return (
            <TournamentCards key={tournament.id} tournament={tournament} />
          );
        })}
      </section>
    </main>
  );
};

export default Tournaments;
