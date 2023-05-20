import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops !! ⚠️</h1>
      <h1 className="error-code">
        {err.status}:{err.statusText}
      </h1>
      <p className="error-message">{err?.error?.message}</p>
    </div>
  );
};

export default Error;
