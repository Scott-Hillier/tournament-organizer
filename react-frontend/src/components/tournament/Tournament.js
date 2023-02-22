import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { getTournament, createSchedule } from "../../routes/apiHelpers";
import Information from "./components/Information";
import Teams from "./components/Teams";
import Group from "./components/Group";
import Schedule from "./components/Schedule";

const Tournament = () => {
  const [tournament, setTournament] = useState({});
  const { tournament_id } = useParams();

  useEffect(() => {
    getTournament(tournament_id).then((res) => {
      setTournament(res);
    });
  }, [tournament_id]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = tournament.groups[source.droppableId];
    const finish = tournament.groups[destination.droppableId];

    if (start === finish) {
      const newTeamIds = Array.from(start.teamIds);

      newTeamIds.splice(source.index, 1);
      newTeamIds.splice(destination.index, 0, draggableId);

      const newGroup = {
        ...start,
        teamIds: newTeamIds,
      };

      const newTournament = {
        ...tournament,
        groups: {
          ...tournament.groups,
          [newGroup.id]: newGroup,
        },
      };

      setTournament(newTournament);

      return;
    }

    const startTeamIds = Array.from(start.teamIds);
    startTeamIds.splice(source.index, 1);
    const newStart = {
      ...start,
      teamIds: startTeamIds,
    };

    const finishTeamIds = Array.from(finish.teamIds);
    finishTeamIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      teamIds: finishTeamIds,
    };

    const newState = {
      ...tournament,
      groups: {
        ...tournament.groups,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setTournament(newState);
  };

  console.log(tournament);

  return (
    <>
      <div className="min-h-screen bg-slate-50 pt-24 pb-8">
        {tournament.info && (
          <div className="flex flex-col items-center">
            <Information info={tournament.info} />

            {tournament.groups["group-null"] ? (
              <Teams
                tournament_id={tournament_id}
                teams={tournament.teams}
                number_of_groups={tournament.info.number_of_groups}
              />
            ) : (
              <>
                <div className="flex flex-wrap justify-center">
                  <DragDropContext onDragEnd={onDragEnd}>
                    {tournament.groupOrder.map((groupId) => {
                      const group = tournament.groups[groupId];
                      const groupTeams = group.teamIds.map(
                        (teamId) => tournament.teams[teamId]
                      );
                      return (
                        <Group
                          key={group.id}
                          group={group}
                          groupTeams={groupTeams}
                        />
                      );
                    })}
                  </DragDropContext>
                </div>
                {!tournament.matches["group-0"] &&
                  tournament.groups["group-0"].teamIds.length ===
                    tournament.groups["group-1"].teamIds.length && (
                    <button
                      className="mt-4 border-2 p-1 rounded"
                      onClick={() => {
                        createSchedule(tournament_id, tournament.groups);
                        window.location.reload();
                      }}
                    >
                      Create Schedule
                    </button>
                  )}
              </>
            )}
            {tournament.matches["group-0"] && (
              <Schedule tournament={tournament} setTournament={setTournament} />
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default Tournament;
