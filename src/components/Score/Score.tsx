import React from "react";

interface IScore {
  score: number;
}

const Score = ({ score }: IScore) => {
  return (
    <>
      <span>{score}/10.0</span>
    </>
  );
};

export default Score;
