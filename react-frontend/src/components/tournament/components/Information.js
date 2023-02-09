const Information = ({ info }) => {
  return (
    <>
      <div className="text-center mb-4">
        <div className="flex flex-col items-center">
          <p>{info.name}</p>
          <p>{info.location}</p>
          <p>
            {new Date(info.start_date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>
            {new Date(info.end_date).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>{info.description}</p>
          <p>{info.format}</p>
          <p>{info.squad ? "Squad" : "3v3"}</p>
        </div>
      </div>
    </>
  );
};

export default Information;
