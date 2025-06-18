import React, { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </div>
  );
};

export default Error;
