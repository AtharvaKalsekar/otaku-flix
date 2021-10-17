import React from "react";
import "./Chip.css";

interface IChip {
  text: String;
}

const Chip = ({ text }: IChip) => {
  return (
    <div className="chip-container">
      <span className="chip-text">{text}</span>
    </div>
  );
};

export default Chip;
