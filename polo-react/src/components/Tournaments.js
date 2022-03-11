import { useEffect } from "react";
import { getUpcomingTournaments } from "../helpers/apiHelpers";

const Tournaments = () => {
  // useEffect(() => {
  //   getUpcomingTournaments().then((res) => {
  //     // setTournamentsArray(formatTournamentsData(res.data));
  //   });
  // }, []);

  useEffect(() => {
    getUpcomingTournaments().then((res) => console.log(res));
  });

  return (
    <main>
      <section>
        <h1>THIS IS THE TOURNAMENT PAGE</h1>
      </section>
    </main>
  );
};

export default Tournaments;
