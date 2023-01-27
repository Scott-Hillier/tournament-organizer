import classNames from "classnames";
import placeholder from "../../../images/PoloPlaceholder.png";

const TournamentCard = ({ tournament }) => {
  const {
    id,
    name,
    location,
    start_date,
    end_date,
    description,
    format,
    squad,
    number_of_teams,
    number_of_groups,
  } = tournament;

  return (
    <>
      <a
        className={classNames(
          "w-4/5 max-w-4xl",
          "flex",
          "sm:flex-col",
          "border-2 border-sky-900 rounded-lg",
          "p-2 m-4"
        )}
        href={`/${id}`}
      >
        <div className="sm:flex sm:justify-center">
          <img
            src={placeholder}
            className="max-w-52 max-h-52 rounded-lg content-center"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-center">
            <p className="w-2/3 text-center font-bold border-b-2">{name}</p>
          </div>
          <div className="flex sm:flex-col justify-between p-4">
            <div className="items-center text-center">
              <p>{location}</p>
              <p>
                {new Date(start_date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>
                {new Date(end_date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="text-center">
              <p>{description}</p>
            </div>
            <div className="text-center">
              <p>{format}</p>
              <p>Teams: {number_of_teams}</p>
              <p>{squad ? "lame" : "not lame"}</p>
              <p></p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};
export default TournamentCard;
