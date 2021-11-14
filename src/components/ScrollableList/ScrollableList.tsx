import React, { useEffect, useRef, useState } from "react";
import List from "../List/List";
import "./ScrollableList.css";

export enum ScrollDimension {
  X = "x",
  Y = "y",
}

export enum ScrollDirection {
  PLUS = "+",
  MINUS = "-",
  ORIGIN = "",
}

interface IScrollableList {
  scrollDimension: ScrollDimension;
  scrollDirection: ScrollDirection;
  scrollDistance: number;
  list: any[];
  getListItemComponent: (itemProps: any) => JSX.Element;
}

const ScrollableList = (props: IScrollableList) => {
  const selfRef = useRef<any>();

  const [itemWidth, setItemWidth] = useState(1);

  const updateListItemDimension = (width: number, height: number) => {
    setItemWidth(width);
  };

  const scrollList = () => {
    let numberOfItems = Math.floor(props.scrollDistance / itemWidth);
    let scrollByDistance = numberOfItems * itemWidth;
    if (props.scrollDirection === ScrollDirection.PLUS) {
      selfRef.current.scrollBy(scrollByDistance, 0);
    } else {
      selfRef.current.scrollBy(-1 * scrollByDistance, 0);
    }
  };

  useEffect(() => {
    scrollList();
  });

  const getStyle = () => {
    return "horizontal-scroll horizontal-scroll-flex";
  };

  return (
    <div className={getStyle()} ref={selfRef}>
      <List
        items={props.list}
        listDimenison={props.scrollDimension}
        updateListItemDimension={updateListItemDimension}
        getListItemComponent={props.getListItemComponent}
      />
    </div>
  );
};

export default ScrollableList;
