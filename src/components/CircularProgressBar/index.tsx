import React from "react";
import "./styles.css";

type Props = {
  progress: number;
  limit: number;
};

const CircularProgressBar = ({ progress, limit }: Props) => {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  limit = limit > 1 ? limit : 1;
  const progressFraction = progress / limit;

  const dashArrayOffset = circumference - circumference * progressFraction;

  const getStrokeColor = () => {
    let progressPct = progressFraction * 100;

    if (progressPct >= 75) {
      return "green";
    } else if (progressPct >= 50) {
      return "lightgreen";
    } else if (progressPct >= 25) {
      return "yellow";
    } else {
      return "red";
    }
  };

  return (
    <div className="progress-ring-container">
      <svg width={50} height={50}>
        <circle
          stroke="black"
          strokeWidth={1}
          cx={25}
          cy={25}
          r={21}
          fill="#b4b4b4"
        />

        <circle
          stroke="black"
          strokeWidth={1}
          cx={25}
          cy={25}
          r={15}
          fill="white"
        />

        <circle
          stroke={getStrokeColor()}
          strokeWidth={4}
          cx={25}
          cy={25}
          r={radius}
          fill="transparent"
          className="progress-ring__circle"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: `${dashArrayOffset}`,
          }}
        />
        <text x="50%" y="50%" className="progress-ring__text">
          {progress}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
