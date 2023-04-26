import React from "react";

export default function ErrorFallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div
      role="alert"
      style={{
        zIndex: "7",
        position: "fixed",
        width: "50%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#f8d7da",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ color: "#721c24", margin: 0 }}>
        "Oups, il semblerait que notre petit robot ait mangé un boulon et ait du
        mal à tout assembler. Veuillez patienter pendant que nous le réparons !"
      </p>
      <pre style={{ color: "#721c24", margin: "10px 0", overflowX: "auto" }}>
        {error.message}
      </pre>
      <button
        style={{
          backgroundColor: "#dc3545",
          color: "white",
          borderRadius: "5px",
          border: "none",
          padding: "10px 20px",
          boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
        }}
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </div>
  );
}
