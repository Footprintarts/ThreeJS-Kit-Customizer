/* eslint-disable react/prop-types */
import "./Tooltip.css";

const Tooltip = ({ text, position }) => {
  console.log("Rendering Tooltip with text:", text); // Debugging

  return (
    <div
      className="tooltip"
      style={{
        left: `${position[0]}px`,
        top: `${position[1]}px`,
        position: "absolute", // Ensure it's positioned absolutely on the page
      }}
    >
      <div className="tooltip-title">
        {text}: {/* Dynamic Title */}
      </div>
      <div className="tooltip-description">
        This is a short description that gives additional information about the
        item. {/* Dummy text for now */}
      </div>
    </div>
  );
};

export default Tooltip;
