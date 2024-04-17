import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingOverlay = ({ loading }) => (
  <>
    {loading && (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark semi-transparent background
          zIndex: 9999, // Ensure this overlay is on top of other content
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BeatLoader size={15} color={"#36D7B7"} loading={loading} />
      </div>
    )}
  </>
);

export default LoadingOverlay;
