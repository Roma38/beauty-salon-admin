import axios from "axios";
import { API_HOST } from "../../config";

export const STAFF_LOADING = "STAFF_LOADING";
export const STAFF_LOAD_SUCCEED = "STAFF_LOAD_SUCCEED";
export const STAFF_LOAD_FAILED = "STAFF_LOAD_FAILED";
export const ADD_STAFF_ITEM = "ADD_STAFF_ITEM";

export const staffLoadStart = () => ({ type: STAFF_LOADING });

export const staffLoadSucceed = staff => ({
  type: STAFF_LOAD_SUCCEED,
  payload: staff
});

export const staffLoadFailed = error => ({
  type: STAFF_LOAD_FAILED,
  payload: error
});

export const addStaffItem = payload => ({
  type: ADD_STAFF_ITEM,
  payload
});

export const getStaff = () => dispatch => {
  dispatch(staffLoadStart());
  axios
    .get(`${API_HOST}/staff`)
    .then(({ data }) => dispatch(staffLoadSucceed(data)))
    .catch(error => dispatch(staffLoadFailed(error)));
};

export const postStaff = payload => dispatch => {
  axios
    .post(`${API_HOST}/staff/add`, payload)
    .then(({ data }) => {
      console.log(data);
      alert("Master successfully added!!!!!");
      dispatch(addStaffItem(data));
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};
