import axios from "axios";
import { API_HOST } from "../../config";
import { history } from "../../history";

export const SERVICES_LOADING = "SERVICES_LOADING";
export const SERVICES_LOAD_SUCCEED = "SERVICES_LOAD_SUCCEED";
export const SERVICES_LOAD_FAILED = "SERVICES_LOAD_FAILED";
export const ADD_SERVICES_ITEM = "ADD_SERVICES_ITEM";
export const EDIT_SERVICES_ITEM = "EDIT_SERVICES_ITEM";
export const DELETE_SERVICES_ITEM = "DELETE_SERVICES_ITEM";

export const servicesLoadStart = () => ({ type: SERVICES_LOADING });

export const servicesLoadSucceed = payload => ({
  type: SERVICES_LOAD_SUCCEED,
  payload
});

export const servicesLoadFailed = error => ({
  type: SERVICES_LOAD_FAILED,
  payload: error
});

export const addServiceItem = payload => ({
  type: ADD_SERVICES_ITEM,
  payload
});

export const editServiceItem = payload => ({
  type: EDIT_SERVICES_ITEM,
  payload
});

export const deleteServiceItem = payload => ({
  type: DELETE_SERVICES_ITEM,
  payload
});

export const getServices = () => dispatch => {
  dispatch(servicesLoadStart());
  axios
    .get(`${API_HOST}/services`)
    .then(({ data }) => dispatch(servicesLoadSucceed(data)))
    .catch(error => dispatch(servicesLoadFailed(error)));
};

export const postService = payload => dispatch => {
  axios
    .post(`${API_HOST}/services`, payload)
    .then(({ data }) => {
      dispatch(addServiceItem(data));
      history.push("/services");
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};

export const putService = payload => dispatch => {
  axios
    .put(`${API_HOST}/services`, payload)
    .then(({ data }) => {
      dispatch(editServiceItem(data));
      history.push("/services");
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};

export const deleteService = _id => dispatch => {
  axios
    .delete(`${API_HOST}/services`, { data: { _id } })//TODO: зачем data???
    .then(() => {
      dispatch(deleteServiceItem({ _id }));
    })
    .catch(({ response }) => {
      console.error(response);
      alert("Oops, something went wrong!!!!!");
    });
};
