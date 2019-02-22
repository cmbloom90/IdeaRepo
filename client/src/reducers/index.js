import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  ideas: ideaReducer
});
