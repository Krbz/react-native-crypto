import * as types from "../actions/actionTypes";
type Action = { type: string; payload: Object };

export default function navReducer(state = {}, action): Action {
  let prepare = {};

  switch (action.type) {
    case types.OPEN_SETTINGS:
      prepare = {
        isSettingsActive: true,
        isBackBtnActive: true,
        isSearchActive: false,
        isFavouriteActive: false,
      };

      return Object.assign({}, action.payload, prepare);

    case types.HIDE_SEARCH_INPUT:
      prepare = {
        isSearchActive: false,
      };

      return Object.assign({}, action.payload, prepare);

    case types.SHOW_SEARCH_INPUT:
      prepare = {
        isSearchActive: true,
      };

      return Object.assign({}, action.payload, prepare);

    case types.OPEN_FAVOURITE:
      prepare = {
        isFavouriteActive: true,
        isBackBtnActive: true,
        isSearchActive: false,
        isSettingsActive: false,
      };

      return Object.assign({}, action.payload, prepare);

    case types.BACK_PRESSED:
      prepare = {
        isFavouriteActive: false,
        isBackBtnActive: false,
        isSearchActive: false,
      };

      return Object.assign({}, action.payload, prepare);

    default:
      return state;
  }
}