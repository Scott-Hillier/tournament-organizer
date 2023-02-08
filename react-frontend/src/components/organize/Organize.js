import classNames from "classnames";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTournament } from "../../routes/apiHelpers";

const Organize = () => {
  let navigate = useNavigate();
  const [organize, setOrganize] = useState({
    name: "",
    location: "",
    description: "",
    numberOfTeams: 0,
    startDate: "",
    endDate: "",
    format: "",
    numberOfGroups: 1,
    teamSize: 3,
  });

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-8">
        <div className="flex flex-col items-center">
          <div>Organize</div>
          <form
            className="flex flex-col w-1/2 items-center"
            onSubmit={(e) => {
              e.preventDefault();
              createTournament(organize).then((res) => {
                navigate(`/tournaments/${res.data[0].id}`);
              });
            }}
          >
            <input
              placeholder="Tournament Name"
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
              className="w-96 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <input
              placeholder="Location"
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, location: e.target.value };
                });
              }}
              className="w-80 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <input
              placeholder="Description"
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, description: e.target.value };
                });
              }}
              className="w-80 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <input
              placeholder="Number of Teams"
              type={"number"}
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, numberOfTeams: e.target.value };
                });
              }}
              min={1}
              className="w-80 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <p className="mt-2 -mb-2">Start Date</p>
            <input
              placeholder="Start Date"
              type={"date"}
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, startDate: e.target.value };
                });
              }}
              className="w-64 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <p className="mt-2 -mb-2">End Date</p>
            <input
              placeholder="End Date"
              type={"date"}
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, endDate: e.target.value };
                });
              }}
              className="w-64 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
            <p className="mt-2">Team Size</p>
            <div className="flex items-center">
              <div
                onClick={() => {
                  setOrganize((prev) => {
                    return { ...prev, teamSize: 3 };
                  });
                }}
                className={classNames(
                  "border-2 p-1 mx-1 rounded",
                  "hover:bg-sky-100 hover:cursor-pointer",
                  organize.teamSize === 3 ? "bg-sky-100" : ""
                )}
              >
                3v3 😃
              </div>
              <div
                onClick={() => {
                  setOrganize((prev) => {
                    return { ...prev, teamSize: 5 };
                  });
                }}
                className={classNames(
                  "border-2 p-1 mx-1 rounded",
                  "hover:bg-sky-100 hover:cursor-pointer",
                  organize.teamSize >= 4 && organize.teamSize <= 6
                    ? "bg-sky-100"
                    : ""
                )}
              >
                Squad 🤮
              </div>
              <input
                placeholder="Other 🤨"
                type={"number"}
                onChange={(e) => {
                  setOrganize((prev) => {
                    return { ...prev, teamSize: e.target.value };
                  });
                }}
                className={classNames(
                  "w-24 m-2 border-b-2 bg-slate-50 text-center",
                  "border-2 p-1 mx-1 rounded",
                  "hover:bg-sky-100 hover:cursor-pointer",
                  organize.teamSize <= 2 || organize.teamSize > 6
                    ? "bg-sky-100"
                    : ""
                )}
              />
            </div>
            <select
              name="Format"
              onChange={(e) => {
                setOrganize((prev) => {
                  return { ...prev, format: e.target.value };
                });
              }}
              className="w-64 m-2 border-b-2 bg-slate-50 text-center"
              required
            >
              <option value={"none"}>Select a Format</option>
              <option value={"Round Robin"}>Round Robin</option>
              <option value={"Swiss Rounds"}>Swiss Rounds</option>
            </select>
            {organize.format === "Round Robin" && (
              <input
                placeholder="Number of Groups"
                type={"number"}
                onChange={(e) => {
                  setOrganize((prev) => {
                    return { ...prev, numberOfGroups: e.target.value };
                  });
                }}
                min={1}
                className="w-64 m-2 border-b-2 bg-slate-50 text-center"
                required
              />
            )}
            <button
              className={classNames(
                "border-2 p-1 mx-1 mt-4 rounded",
                "hover:bg-sky-100 hover:cursor-pointer"
              )}
            >
              Create Tournament
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Organize;
