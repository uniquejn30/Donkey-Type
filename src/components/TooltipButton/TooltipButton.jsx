import { useState } from "react";
import { IoTriangle } from "react-icons/io5";

const TooltipButton = ({ icon, tooltipText, onClickHandler }) => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    const handleMouseEnter = () => {
      setShowTooltip(true);
    };
  
    const handleMouseLeave = () => {
      setShowTooltip(false);
    };
  
    return (
      <div
        className="tooltip-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={onClickHandler}>{icon}</button>
            {showTooltip && 
            <div className="tooltip">
                <IoTriangle className="arrow-icon" />
                {tooltipText}
            </div>
            }
      </div>
    );
  };

  export default TooltipButton;