import { SET_PRODUCT, LOADING_PRODUCT } from "../types";
import axios from "axios";

export const getProducts = (tipe) => (dispatch) => {
  dispatch({ type: LOADING_PRODUCT });
  axios
    .get(`/api/v1/${tipe}`)
    .then((res) => {
      dispatch({ type: SET_PRODUCT, payload: res.data.data });
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};

export const orderProduct = (tipe, customerData) => {
  axios
    .post(`/api/v1/${tipe}`, customerData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response.data);
    });
};
