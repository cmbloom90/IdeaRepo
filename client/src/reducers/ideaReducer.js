import _ from "lodash";
import {
  FETCH_IDEA,
  FETCH_IDEAS,
  CREATE_IDEA,
  EDIT_IDEA,
  DELETE_IDEA,
  SEARCH_IDEA
} from "../actions/actionType";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_IDEAS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_IDEA:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_IDEA:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_IDEA:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_IDEA:
      return _.omit(state, action.payload);
    case SEARCH_IDEA:
      return { ...state, [action.payload.language]: action.payload };
    default:
      return state;
  }
};
