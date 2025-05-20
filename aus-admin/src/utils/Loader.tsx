import React from "react";

interface LoaderProps {
  progress?: number | null;
}

const Loader: React.FC<LoaderProps> = ({ progress }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 9999,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          width: "64px",
          height: "64px",
          border: "4px dashed #3b82f6",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "1rem",
        }}
      />
      {typeof progress === "number" && (
        <div style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#3b82f6" }}>
          {progress}% uploading...
        </div>
      )}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;

