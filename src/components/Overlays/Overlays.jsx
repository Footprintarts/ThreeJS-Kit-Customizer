/* eslint-disable no-unused-vars */
// Overlays.jsx
import { state } from "../store";
import { useSnapshot } from "valtio";
import { useState } from "react";

export default function Overlay() {
  const { colorCategories, selectedColor, selectedPart } = useSnapshot(state);
  const [activeColorIndex, setActiveColorIndex] = useState(null);

  const handleColorClick = (color) => {
    if (selectedPart) {
      state.selectedColor = color;
    }
  };

  // Check if color is light or dark
  const isLightColor = (color) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 200; // Adjust threshold as needed
  };

  return (
    <div
      className="color-picker"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        overflowY: "auto",
        maxHeight: "80vh",
        width: "80%",
      }}
    >
      <p
        style={{
          color: "gold",
          fontStyle: "italic",
          marginBottom: "1rem",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        <b>
          {selectedPart
            ? `SELECTED: ${selectedPart.toUpperCase()}`
            : "CLICK A PART!"}
        </b>
      </p>
      {colorCategories.map((category, index) => (
        <div
          key={category.name}
          style={{ marginBottom: "1rem", width: "100%" }}
        >
          <h3
            style={{
              color: "white",
              textAlign: "left",
              marginBottom: "0.5rem",
              fontSize: "20px",
            }}
          >
            <span
              style={{
                color: "gold",
                fontSize: "24px",
                marginRight: "0.5rem",
              }}
            >
              {index < 9 ? `0${index + 1}` : index + 1}
            </span>{" "}
            {category.name}
          </h3>
          {category.subSections ? (
            category.subSections.map((subSection) => (
              <div key={subSection.name} style={{ marginBottom: "1rem" }}>
                <h4
                  style={{
                    color: "white",
                    textAlign: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  {subSection.name}
                </h4>

                <div
                  style={{
                    display: "flex",
                    borderRadius: "8px",
                    overflow: "hidden",
                    backgroundColor: "pink",
                  }}
                >
                  {/* COLOR PALLETE */}
                  {subSection.colors.map((color, index) => (
                    <div
                      key={color}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.5s ease-in-out",
                        cursor: "pointer",
                        position: "relative",
                        backgroundColor: color,
                        flex:
                          activeColorIndex ===
                          `${category.name}-${subSection.name}-${index}`
                            ? 3
                            : 1,
                        minWidth: "20px",
                        height: "80px",
                      }}
                      onMouseEnter={() =>
                        setActiveColorIndex(
                          `${category.name}-${subSection.name}-${index}`
                        )
                      }
                      onMouseLeave={() => setActiveColorIndex(null)}
                      onClick={() => handleColorClick(color)}
                    >
                      <p
                        style={{
                          textTransform: "uppercase",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          color: isLightColor(color) ? "black" : "white", // Adjusted text color
                          position: "absolute",
                          transition: "opacity 0.3s ease-in-out",
                          opacity:
                            activeColorIndex ===
                            `${category.name}-${subSection.name}-${index}`
                              ? 1
                              : 0,
                        }}
                      >
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                display: "flex",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {category.colors.map((color, index) => (
                <div
                  key={color}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.5s ease-in-out",
                    cursor: "pointer",
                    position: "relative",
                    backgroundColor: color,
                    flex:
                      activeColorIndex === `${category.name}-${index}` ? 3 : 1,
                    minWidth: "20px",
                    height: "80px",
                  }}
                  onMouseEnter={() =>
                    setActiveColorIndex(`${category.name}-${index}`)
                  }
                  onMouseLeave={() => setActiveColorIndex(null)}
                  onClick={() => handleColorClick(color)}
                >
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      color: isLightColor(color) ? "black" : "white", // Adjusted text color
                      position: "absolute",
                      transition: "opacity 0.3s ease-in-out",
                      opacity:
                        activeColorIndex === `${category.name}-${index}`
                          ? 1
                          : 0,
                    }}
                  >
                    {color}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
