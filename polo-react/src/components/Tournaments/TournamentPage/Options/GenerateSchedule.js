import {
  createGroupSchedule,
  createSwissSchedule,
  createMixerSchedule,
} from "../../../../helpers/apiHelpers";

const GenerateSchedule = ({
  tournament_id,
  format,
  groupsState,
  teamsState,
  round_number,
  playersState,
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        switch (format) {
          case "Round Robin":
            createGroupSchedule(tournament_id, groupsState);
            break;
          case "Swiss Rounds":
            createSwissSchedule(tournament_id, teamsState, round_number);
            break;
          case "Mixer":
            createMixerSchedule(tournament_id, playersState, round_number);
        }
        // window.location.reload();
      }}
    >
      Generate Schedule
    </button>
  );
};

export default GenerateSchedule;
