import React, { useEffect, useRef } from "react";

interface IListItem {
  children: any;
  id: number;
  updateDimension: (width: number, height: number) => void;
}

const ListItem = (props: IListItem) => {
  const selfRef = useRef<any>();

  useEffect(() => {
    if (props.id === 0) {
      let componentWidth = selfRef.current.getBoundingClientRect().width;
      let componentHeight = selfRef.current.getBoundingClientRect().height;
      props.updateDimension(componentWidth, componentHeight);
    }
  }, [props.id]);

  return <div ref={selfRef}>{props.children}</div>;
};

export default ListItem;
