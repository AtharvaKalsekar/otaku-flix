import { SearchBarOption } from "../components/Header/types";
import { SearchBarReducerAction } from "../reducers/types";
import { SearchBarAction } from "./constants";

export const getSearchOptionsAction =
  (query: string) => async (dispatch, getState) => {
    const searchBarActionStart: SearchBarReducerAction = {
      type: SearchBarAction.SEARCH_QUERY,
    };
    try {
      dispatch(searchBarActionStart);
      const resp = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}`
      );
      const respJson = await resp.json();
      const { results } = respJson;
      let searchOptions: SearchBarOption[] = results.map((res: any) => {
        return {
          label: res.title,
          value: res.mal_id,
        };
      });
      console.log("Search options => ", searchOptions);
      const searchBarActionSuccess: SearchBarReducerAction = {
        type: SearchBarAction.SEARCH_QUERY_SUCCESS,
        payload: {
          searchResults: searchOptions,
        },
      };
      dispatch(searchBarActionSuccess);
    } catch (e) {
      const searchBarActionFail: SearchBarReducerAction = {
        type: SearchBarAction.SEARCH_QUERY_FAIL,
      };
      dispatch(searchBarActionFail);
    }
  };
