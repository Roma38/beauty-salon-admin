import {
  SERVICES_LOADING,
  SERVICES_LOAD_SUCCEED,
  SERVICES_LOAD_FAILED,
  ADD_SERVICES_ITEM,
  // EDIT_SERVICES_ITEM,
  // DELETE_SERVICES_ITEM
} from "../actions/services.js";

const initialState = {
  servicesLoadingState: "",
  error: null,
  items: [],
  categories: []
};

export const servicesReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVICES_LOADING:
      return { ...state, servicesLoadingState: "loading" };
    case SERVICES_LOAD_SUCCEED:
      const { items, categories } = payload;
      return { ...state, servicesLoadingState: "succeed", items, categories };
    case SERVICES_LOAD_FAILED:
      return {
        ...initialState,
        servicesLoadingState: "failed",
        error: payload
      };
    case ADD_SERVICES_ITEM:
      return {
        ...state,
        items: [...state.items, payload]
      };
    // case EDIT_SERVICES_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.map(item =>
    //       item._id === payload._id ? payload : item
    //     )
    //   };
    // case DELETE_SERVICES_ITEM:
    //   return {
    //     ...state,
    //     items: state.items.filter(({ _id }) => _id !== payload._id)
    //   };

    default:
      return state;
  }
};
