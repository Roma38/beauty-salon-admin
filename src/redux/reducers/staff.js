import {
  STAFF_LOADING,
  STAFF_LOAD_SUCCEED,
  STAFF_LOAD_FAILED,
  ADD_STAFF_ITEM
} from "../actions/staff.js";

const initialState = {
  staffLoadingState: "",
  error: null,
  items: []
};

export const staffReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case STAFF_LOADING:
      return { ...state, staffLoadingState: "loading" };
    case STAFF_LOAD_SUCCEED:
      return { ...state, staffLoadingState: "succeed", items: payload };
    case STAFF_LOAD_FAILED:
      return {
        ...state,
        staffLoadingState: "failed",
        error: payload,
        items: []
      };
    case ADD_STAFF_ITEM:
      return {
        ...state,
        items: [...state.items, payload]
      };

    default:
      return state;
  }
};
