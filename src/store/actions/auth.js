import * as actionTypes from "./actionTypes";

import axios from "axios";

//ACTION CREATOR is used together with Middleware (aka redux-thunk) for Asynchronous code
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

//ACTION Creator
export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

//ACTION Creator
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

//Normal Logout function
export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

//ACTION Creator to handle User Logout
export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000); //expirationTime is 3600, n in setTimeout, they receive in miliseconds..so hence need to * 1000 to get 3600 seconds
  };
};

export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGaZcULd36ULvQ7hF4PYaG7XjD0aE6nNw";
    if (!isSignup) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGaZcULd36ULvQ7hF4PYaG7XjD0aE6nNw";
    }
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch(authFail(err.response.data.error));
      });
  };
};

//Action Creator
export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};
