import axios from "axios";
import actionTypes from "../actionTypes";

// Normal bir aksiyon
export const setRestaurants = async (payload) => {
  return {
    type: actionTypes.REST_SUCCESS,
    payload,
  };
};

// * Redux Thunk - Asekron Aksiyon
// Fonksiyon içerisinde fonksiyon return ederiz

export const getRestaurants = () => {
  return (dispatch) => {
    // asekron işlemler yapabilir.

    // dispatch ile reducer'a haber gönderebiliyoruz.
    dispatch({
      type: actionTypes.REST_LOADING,
    });
    axios
      .get("http://localhost:3000/restaurants")
      .then((res) =>
        dispatch({
          type: actionTypes.REST_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: actionTypes.REST_ERROR,
          payload: err,
        })
      );
  };
};
