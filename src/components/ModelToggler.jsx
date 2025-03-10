/* eslint-disable react/prop-types */
// ModelToggler.jsx
import { useState } from "react";

const ModelToggler = ({ onModelChange }) => {
  const [selectedModel, setSelectedModel] = useState("Shooting"); // Default to Shooting

  const handleModelChange = (modelName) => {
    setSelectedModel(modelName);
    onModelChange(modelName);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        zIndex: 10,
      }}
    >
      <h3
        style={{
          color: "gold",
          margin: "0",
          textAlign: "left",
          fontSize: "24px",
          fontStyle: "italic",
        }}
      >
        CHANGE POSE
      </h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => handleModelChange("Shooting")}
          style={{
            backgroundColor: selectedModel === "Shooting" ? "gold" : "#333",
            color: selectedModel === "Shooting" ? "black" : "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (selectedModel !== "Shooting") {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
            }
          }}
          onMouseOut={(e) => {
            if (selectedModel !== "Shooting") {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "white";
            }
          }}
        >
          Shooting
        </button>

        <button
          onClick={() => handleModelChange("StandOnBall")}
          style={{
            backgroundColor: selectedModel === "StandOnBall" ? "gold" : "#333",
            color: selectedModel === "StandOnBall" ? "black" : "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (selectedModel !== "StandOnBall") {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
            }
          }}
          onMouseOut={(e) => {
            if (selectedModel !== "StandOnBall") {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "white";
            }
          }}
        >
          StandOnBall
        </button>
        <button
          onClick={() => handleModelChange("Tackle")}
          style={{
            backgroundColor: selectedModel === "Tackle" ? "gold" : "#333",
            color: selectedModel === "Tackle" ? "black" : "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (selectedModel !== "Tackle") {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
            }
          }}
          onMouseOut={(e) => {
            if (selectedModel !== "Tackle") {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "white";
            }
          }}
        >
          Tackle
        </button>
        <button
          onClick={() => handleModelChange("LaPulga")}
          style={{
            backgroundColor: selectedModel === "LaPulga" ? "gold" : "#333",
            color: selectedModel === "LaPulga" ? "black" : "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (selectedModel !== "LaPulga") {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
            }
          }}
          onMouseOut={(e) => {
            if (selectedModel !== "LaPulga") {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "white";
            }
          }}
        >
          LaPulga
        </button>
        <button
          onClick={() => handleModelChange("Jude")}
          style={{
            backgroundColor: selectedModel === "Jude" ? "gold" : "#333",
            color: selectedModel === "Jude" ? "black" : "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            if (selectedModel !== "Jude") {
              e.target.style.backgroundColor = "gold";
              e.target.style.color = "black";
            }
          }}
          onMouseOut={(e) => {
            if (selectedModel !== "Jude") {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "white";
            }
          }}
        >
          Jude
        </button>
      </div>
    </div>
  );
};

export default ModelToggler;
