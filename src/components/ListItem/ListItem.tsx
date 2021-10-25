import React, { useEffect, useRef } from "react";

interface IListItem {
  children: any;
  id: number;
  updateDimension: (width: number, height: number) => void;
}

const ListItem = (props: IListItem) => {
  const selfRef = useRef<any>();

  const { id, updateDimension } = props;

  useEffect(() => {
    if (id === 0) {
      let componentWidth = selfRef.current.getBoundingClientRect().width;
      let componentHeight = selfRef.current.getBoundingClientRect().height;
      updateDimension(componentWidth, componentHeight);
    }
  }, [id, updateDimension]);

  return <div ref={selfRef}>{props.children}</div>;
};

export default ListItem;
