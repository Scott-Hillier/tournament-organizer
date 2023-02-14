import { Droppable } from "react-beautiful-dnd";
import Team from "./components/Team";

const Group = ({ group, groupTeams }) => {
  return (
    <div className="border-2 m-4 p-4 rounded-lg">
      <Droppable droppableId={group.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {groupTeams.map((team, index) => (
              <Team key={team.id} team={team} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Group;
