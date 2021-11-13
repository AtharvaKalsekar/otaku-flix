import React from "react";

type Props = {
  children: JSX.Element;
};

const Body = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Body;
