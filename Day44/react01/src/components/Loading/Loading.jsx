import React, { memo } from "react";

const Loading = ({ showLoading }) => {
  console.log("render-loading");
  return (
    <div className="loading" style={{ visibility: `${showLoading ? "visible" : "hidden"} ` }}>
      <p>Loading...</p>
    </div>
  );
};

export default memo(Loading);
