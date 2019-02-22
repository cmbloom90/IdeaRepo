import ideas from "../apis/ideas";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_IDEAS,
  CREATE_IDEA,
  FETCH_IDEA,
  EDIT_IDEA,
  DELETE_IDEA,
  SEARCH_IDEA
} from "./actionType";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchIdeas = () => async dispatch => {
  const response = await ideas.get("/ideas");

  dispatch({ type: FETCH_IDEAS, payload: response.data });
};

export const fetchIdea = id => async dispatch => {
  const response = await ideas.get(`ideas/${id}`);

  dispatch({ type: FETCH_IDEA, payload: response.data });
};

export const createIdea = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await ideas.post("/ideas", { ...formValues, userId });

  dispatch({ type: CREATE_IDEA, payload: response.data });
  history.push("/idea/all");
};

export const editIdea = (id, formValues) => async dispatch => {
  const response = await ideas.patch(`/ideas/${id}`, formValues);

  dispatch({ type: EDIT_IDEA, payload: response.data });
  history.push("/idea/all");
};

export const deleteIdea = id => async dispatch => {
  await ideas.delete(`/ideas/${id}`);

  dispatch({ type: DELETE_IDEA, payload: id });
  history.push("/idea/all");
};

export const searchIdea = language => async dispatch => {
  const response = await ideas.get(`ideas/${language}`);

  dispatch({ type: SEARCH_IDEA, payload: response.data });
};
