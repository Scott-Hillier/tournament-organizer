import {
  createGroupSchedule,
  // createSwissSchedule,
  // createMixerSchedule,
} from "../../../../helpers/apiHelpers";

const GenerateSchedule = ({ tournament_id, format, groups }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          switch (format) {
            case "Round Robin":
              createGroupSchedule(tournament_id, groups);
              break;
            // case "Swiss Rounds":
            //   createSwissSchedule(tournament_id, teamsState, round_number);
            //   break;
          }
          window.location.reload();
        }}
      >
        Generate Schedule
      </button>
    </div>
  );
};

export default GenerateSchedule;
