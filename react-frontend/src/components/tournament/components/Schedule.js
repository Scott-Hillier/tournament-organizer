import classNames from "classnames";
import { useState } from "react";
import { updateMatchResults } from "../../../routes/apiHelpers";
import Match from "./components/Match";

const Schedule = ({ tournament }) => {
  const [matchResults, setMatchResults] = useState({});
  return (
    <>
      <div className="flex flex-wrap w-full justify-center">
        {tournament.groupOrder.map((group, i) => (
          <div key={i} className="w-72 mx-14 p-2">
            {tournament.matches[group].map((match, index) => (
              <Match
                key={match.id}
                match={match}
                teams={tournament.teams}
                index={index}
                matchResults={matchResults}
                setMatchResults={setMatchResults}
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
          { "-mb-24": Object.keys(matchResults).length === 0 }
        )}
      >
        <p
          className="p-1 border rounded cursor-pointer"
          onClick={() => {
            updateMatchResults(tournament.info.id, matchResults);
            window.location.reload();
          }}
        >
          Submit
        </p>
      </div>
    </>
  );
};

export default Schedule;
