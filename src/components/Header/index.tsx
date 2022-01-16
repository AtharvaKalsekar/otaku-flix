import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Select, { SingleValue } from "react-select";
import { getSearchOptionsAction } from "../../actions/searchBarActions";
import "./styles.css";
import { SearchBarOption } from "./types";

const Header = (props: any) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState<string>();
  const searchBar = useSelector((state: any) => state.searchBar);
  const { isLoading, isError, searchResults } = searchBar;

  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchText && searchText.length >= 3) {
        dispatch(getSearchOptionsAction(searchText));
      }
    }, 300);
    console.log("SR => ", searchResults);
    return () => clearTimeout(timer);
  }, [searchText]);

  const onInputChange = (text) => {
    setSearchText(text);
  };

  const onChange = (selectedOption: SingleValue<SearchBarOption>) => {
    console.log("selectd option =>", selectedOption, props);
    history.push(`anime/${selectedOption?.value}`);
  };

  const loaderMessage = () => {
    return <div>loading ...</div>;
  };

  return (
    <div className="header-container">
      <div className="logo-container">
        <h2>Otaku-flix</h2>
      </div>
      <Select
        className="search-bar"
        placeholder="Search anime or manga"
        isClearable
        loadingMessage={loaderMessage}
        onInputChange={onInputChange}
        isLoading={isLoading}
        options={searchResults}
        onChange={onChange}
      />
    </div>
  );
};

export default Header;
