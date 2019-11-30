import { combineReducers } from "redux";
import { staffReduser as staff } from "./staff";
import { servicesReduser as services } from "./services";

const rootReduser = combineReducers({
  staff,
  services
});

export default rootReduser;
