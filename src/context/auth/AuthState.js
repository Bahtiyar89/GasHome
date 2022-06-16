import React, {useReducer} from 'react';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

import {
  F4_POST_SUCC_BALANCE,
  LOGOUT,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FALSE_REDIRECT,
  VARIFY_OK,
  LOADING,
  CHECKOUT_ORDER,
  GET_CHECKOUT_ORDER,
  BALANCE_0,
  CLOSE_MODAL_BALANCE,
  REGISTER_SUCCESS,
} from '../types';

const AuthState = props => {
  const initialState = {
    user: null,
    refreshToken: null,
    error: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Login User
  const signin = async formData => {
    console.log('FormData: ', formData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: formData,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        error: state.error,
        user: state.user,
        refreshToken: state.refreshToken,
        signin,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
