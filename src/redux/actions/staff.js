import axios from "axios";
import { API_HOST } from "../../config";
import { history } from "../../history";

export const STAFF_LOADING = "STAFF_LOADING";
export const STAFF_LOAD_SUCCEED = "STAFF_LOAD_SUCCEED";
export const STAFF_LOAD_FAILED = "STAFF_LOAD_FAILED";
export const ADD_STAFF_ITEM = "ADD_STAFF_ITEM";
export const EDIT_STAFF_ITEM = "EDIT_STAFF_ITEM";
export const DELETE_STAFF_ITEM = "DELETE_STAFF_ITEM";

export const staffLoadStart = () => ({ type: STAFF_LOADING });

export const staffLoadSucceed = payload => ({
  type: STAFF_LOAD_SUCCEED,
  payload
});

export const staffLoadFailed = error => ({
  type: STAFF_LOAD_FAILED,
  payload: error
});

export const addStaffItem = payload => ({
  type: ADD_STAFF_ITEM,
  payload
});

export const editStaffItem = payload => ({
  type: EDIT_STAFF_ITEM,
  payload
});

export const deleteStaffItem = payload => ({
  type: DELETE_STAFF_ITEM,
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
    .post(`${API_HOST}/staff`, payload)
    .then(({ data }) => {
      dispatch(addStaffItem(data));
      history.push("/staff");
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};

export const putStaff = payload => dispatch => {
  axios
    .put(`${API_HOST}/staff`, payload)
    .then(({ data }) => {
      dispatch(editStaffItem(data));
      history.push("/staff");
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};

export const deleteStaff = _id => dispatch => {
  axios
    .delete(`${API_HOST}/staff`, { data: { _id } })
    .then(() => {
      dispatch(deleteStaffItem({ _id }));
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};
