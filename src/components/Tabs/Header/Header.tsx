import React from "react";

type Props = {
  children: JSX.Element;
};

const Header = ({ children }: Props) => {
  return (
    <div>
      <span>{children}</span>
    </div>
  );
};

export default Header;
