import { Draggable } from "react-beautiful-dnd";
import classNames from "classnames";

const Team = ({ team, index, draggable }) => {
  return (
    <>
      {draggable ? (
        <Draggable draggableId={`team-${team.id}`} index={index}>
          {(provided, snapshot) => (
            <div
              className={classNames(
                "flex flex-col w-96 my-2 items-center",
                "border border-black rounded-lg",
                "bg-slate-100",
                { "bg-green-200": snapshot.isDragging }
              )}
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <p className="font-semibold">{team.name}</p>
              <div className="flex flex-wrap justify-center">
                <p>{team.player1}</p>
                <p className="px-2">{team.player2}</p>
                <p>{team.player3}</p>
              </div>
            </div>
          )}
        </Draggable>
      ) : (
        <div
          className={classNames(
            "flex flex-col w-96 my-2 items-center",
            "border border-black rounded-lg",
            "bg-slate-100"
          )}
        >
          <p className="font-semibold">{team.name}</p>
          <div className="flex flex-wrap justify-center">
            <p>{team.player1}</p>
            <p className="px-2">{team.player2}</p>
            <p>{team.player3}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Team;
