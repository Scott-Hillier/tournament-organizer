import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";
import Team from "./components/Team";

const Group = ({ group, groupTeams }) => {
  return (
    <Droppable droppableId={group.id}>
      {(provided, snapshot) => (
        <div
          className={classNames("border-2 m-4 p-4 rounded-lg", "bg-slate-100", {
            "bg-green-200": snapshot.isDragging,
          })}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {groupTeams.map((team, index) => (
            <Team key={team.id} team={team} index={index} draggable={true} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Group;
