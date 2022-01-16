import { SearchBarAction } from "../actions/constants";
import { Action, SearchBarReducerAction, SearchBarReducerState } from "./types";

export const searchBarReducer = (
  state: SearchBarReducerState = { searchResults: [] },
  action: SearchBarReducerAction
) => {
  console.log("SBR => ", action);
  switch (action.type) {
    case SearchBarAction.SEARCH_QUERY:
      return { ...state, isLoading: true };
    case SearchBarAction.SEARCH_QUERY_SUCCESS:
      const searchRes = action.payload?.searchResults;
      return { ...state, isLoading: false, searchResults: searchRes };
    case SearchBarAction.SEARCH_QUERY_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
