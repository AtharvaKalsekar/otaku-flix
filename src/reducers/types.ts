import { SearchBarOption } from "../components/Header/types";

export interface Action {
  type: string;
  payload?: unknown;
}

export interface SearchBarReducerState {
  searchResults: SearchBarOption[];
}

export interface SearchBarReducerAction extends Action {
  payload?: {
    searchResults: SearchBarOption[];
  };
}
