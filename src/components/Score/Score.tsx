import React from "react";

interface IScore {
  score: number;
}

const Score = ({ score }: IScore) => {
  return (
    <div>
      <h3>{score}/10.0</h3>
    </div>
  );
};

export default Score;
