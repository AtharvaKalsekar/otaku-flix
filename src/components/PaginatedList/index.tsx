import React from "react";
import List from "../List/List";

type Props = {
  items: any[];
  getListItemComponent: (itemProps: any) => JSX.Element;
};

const PaginatedList = ({ items, getListItemComponent }: Props) => {
  return (
    <div>
      <List
        items={items}
        listDimenison={"y"}
        getListItemComponent={getListItemComponent}
      />
    </div>
  );
};

export default PaginatedList;
