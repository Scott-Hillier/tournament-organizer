import { useEffect } from "react";
import { getAllTournaments } from "../../helpers/apiHelpers";
import TournamentCards from "./TournamentCards";

const Tournaments = () => {
  const allTournamentsArray = [];

  useEffect(() => {
    getAllTournaments().then((res) => {
      console.log(res.data);
      for (const tournament in res.data) {
        console.log(tournament);
        allTournamentsArray.push(tournament);
      }
      console.log(allTournamentsArray);
    });
  }, []);

  return (
    <main>
      <section>
        <h1>THIS IS THE TOURNAMENT PAGE</h1>
        <TournamentCards />
      </section>
    </main>
  );
};

export default Tournaments;
