// Pallete.jsx
import "./Tooltip.css";
import Overlay from "./Overlays"; // Import the Overlay component

const Pallete = () => {
  return (
    <div
      className="sidepanel"
      style={{
        position: "absolute",
        padding: "1rem",
        bottom: "0",
        right: "0",
        width: "25%",
        height: "100%",
        display: "flex",
        flexDirection: "column", // Arrange children vertically
        alignItems: "center", // Center horizontally
      }}
    >
      <Overlay /> {/* Render the Overlay component */}
    </div>
  );
};

export default Pallete;
