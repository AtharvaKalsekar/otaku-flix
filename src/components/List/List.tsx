import React from "react";
import Card from "../Card/Card";
import ListItem from "../ListItem/ListItem";
import "./List.css";

interface IList {
  items: any[];
  updateListItemDimension: (width: number, height: number) => void;
}

const List = ({ items, updateListItemDimension }: IList) => {
  return (
    <div className="list-container">
      {items.map((item, idx) => {
        return (
          <ListItem
            id={idx}
            updateDimension={updateListItemDimension}
            key={idx}
          >
            <div className="list-item" id={`#${idx}`}>
              <Card {...item} />
            </div>
          </ListItem>
        );
      })}
    </div>
  );
};

export default List;
