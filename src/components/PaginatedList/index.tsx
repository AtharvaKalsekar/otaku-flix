import React, { useState } from "react";
import List from "../List/List";
import "./styles.css";

type Props = {
  items: any[];
  numberOfItemsPerPage?: number;
  getListItemComponent: (itemProps: any) => JSX.Element;
};

const PaginatedList = ({
  items,
  getListItemComponent,
  numberOfItemsPerPage,
}: Props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const getPageNavigator = () => {
    let totalNumberOfPages = Math.ceil(
      items.length / (numberOfItemsPerPage || items.length)
    );

    const onClickLeft = () => {
      let newPageNumber: number = pageNumber - 1 < 1 ? 1 : pageNumber - 1;
      setPageNumber(newPageNumber);
    };

    const onClickRight = () => {
      let newPageNumber: number =
        pageNumber + 1 > totalNumberOfPages ? pageNumber : pageNumber + 1;
      setPageNumber(newPageNumber);
    };

    const onClickPageNumber = (targetPageNumber: number) => {
      setPageNumber(targetPageNumber);
    };

    return (
      totalNumberOfPages > 1 && (
        <div className="page-navigator-container">
          <div className="item nav-btn" onClick={onClickLeft}>
            &lt;
          </div>
          {[...Array(totalNumberOfPages)].map((elem, idx) => {
            console.log("pages map", idx, elem);
            let pagePosition = idx + 1;
            let isCurrentPageNumber = pageNumber === pagePosition;
            let pageNumberStyle = isCurrentPageNumber
              ? "item current-page"
              : "item page-number";
            return (
              <div
                className={pageNumberStyle}
                onClick={() => onClickPageNumber(pagePosition)}
              >
                {pagePosition}
              </div>
            );
          })}
          <div className="item nav-btn" onClick={onClickRight}>
            &gt;
          </div>
        </div>
      )
    );
  };

  const getValidNumberOfItemsPerPage = (): number => {
    return numberOfItemsPerPage || 0;
  };

  const getCurrentPageItems = (): any[] => {
    let validNumberOfPages = getValidNumberOfItemsPerPage();
    if (validNumberOfPages === 0) {
      return items;
    }
    let start = (pageNumber - 1) * validNumberOfPages;
    let end = start + validNumberOfPages;
    let validEnd = end > items.length ? items.length : end;
    return items.slice(start, validEnd);
  };

  return (
    <div>
      <List
        items={getCurrentPageItems()}
        listDimenison={"y"}
        getListItemComponent={getListItemComponent}
      />
      {getPageNavigator()}
    </div>
  );
};

export default PaginatedList;
