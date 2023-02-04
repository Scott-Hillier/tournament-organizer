import { useState } from "react";
import Tournament from "../tournament/Tournament";

const Organize = () => {
  const [organize, setOrganize] = useState({
    name: "",
    location: "",
    description: "",
    numberOfTeams: "",
    startDate: "",
    endDate: "",
    format: "",
    numberOfGroups: "0",
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
              console.log("HIT");
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
                  return { ...prev, name: e.target.value };
                });
              }}
              className="w-80 m-2 border-b-2 bg-slate-50 text-center"
              required
            />
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
            {setOrganize.format === "Round Robin" && (
              <input
                placeholder="Number of Groups"
                type={"number"}
                onChange={(e) => {
                  setOrganize((prev) => {
                    return { ...prev, numberOfGroups: e.target.value };
                  });
                }}
                className="w-80 m-2 border-b-2 bg-slate-50 text-center"
                required
              />
            )}
            <button className="border mt-4 p-2">Create Tournament</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Organize;
