import classNames from "classnames";
import { useState } from "react";
import { updateWinners } from "../../../routes/apiHelpers";
import Match from "./components/Match";

const Schedule = ({ tournament, setTournament }) => {
  const [winners, setWinners] = useState({});
  console.log(winners);
  return (
    <>
      <div className="flex flex-wrap w-full justify-center">
        {Object.values(tournament.matches).map((group, i) => (
          <div key={i} className="w-72 m-4 p-2">
            {group.map((match, index) => (
              <Match
                key={match.id}
                match={match}
                teams={tournament.teams}
                index={index}
                winners={winners}
                setWinners={setWinners}
              />
            ))}
          </div>
        ))}
      </div>
      <div
        className={classNames(
          "z-9 fixed bottom-0 left-0 w-full h-16",
          "flex justify-center items-center",
          "bg-cyan-800 text-white",
          "duration-500",
          { "-mb-24": Object.keys(winners).length === 0 }
        )}
      >
        <p className="p-1 border rounded">Submit</p>
      </div>
    </>
  );
};

export default Schedule;
