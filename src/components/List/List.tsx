import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

interface IList {
  items: any[];
  listDimenison: "x" | "y";
  updateListItemDimension?: (width: number, height: number) => void;
  getListItemComponent: (itemProps: any) => JSX.Element;
}

const List = ({
  items,
  updateListItemDimension,
  getListItemComponent,
  listDimenison,
}: IList) => {
  const getListStyle = () => {
    return `list-container list-${listDimenison}`;
  };

  const getListItemStyle = () => {
    return `list-${listDimenison}-item`;
  };

  return (
    <div className={getListStyle()}>
      {items.map((item, idx) => {
        return (
          <div className={getListItemStyle()} id={`#${idx}`} key={idx}>
            <ListItem
              id={idx}
              updateDimension={updateListItemDimension}
              key={idx}
            >
              {getListItemComponent(item)}
            </ListItem>
          </div>
        );
      })}
    </div>
  );
};

export default List;
