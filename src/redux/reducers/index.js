import { combineReducers } from "redux";
import { staffReduser as staff} from "./staff";

const rootReduser = combineReducers({
  staff
});

export default rootReduser;
