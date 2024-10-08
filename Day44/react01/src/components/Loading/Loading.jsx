import React from "react";

const Loading = ({ showLoading }) => {
  return (
    <div className="loading" style={{ visibility: `${showLoading ? "visible" : "hidden"} ` }}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
