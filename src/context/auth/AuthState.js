import React, {useReducer} from 'react';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';

import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import {doPost} from '../../utils/apiActions';

import {LOGIN_SUCCESS, LOADING, SIGN_UP_SUCCESS, LOGOUT} from '../types';
import utility from '../../utils/Utility';

const AuthState = props => {
  const toast = useToast();
  const initialState = {
    user: null,
    loading: false,
    token: null,
    refreshToken: null,
    error: false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Login User
  const signin = async formData => {
    dispatch({type: LOADING, payload: true});
    doPost('/accounts/login-api/', formData)
      .then(({data}) => {
        console.log('data: ', data);
        dispatch({type: LOADING, payload: false});
        dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
      })
      .catch(error => {
        toast.show(JSON.stringify(error.response.data), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING, payload: false});
      });
  };

  //Sign up user
  const signup = async (FormData, navigation) => {
    dispatch({type: LOADING, payload: true});
    console.log('FormData: ', FormData);
    axios
      .post(`http://128.199.31.140:8444/accounts/register-api/`, FormData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(({data}) => {
        console.log('data: ', data);
        dispatch({type: LOADING, payload: false});
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: FormData,
        });
        navigation.navigate('LoginScreen');
      })
      .catch(error => {
        console.log('error: 2', error.response.data);

        dispatch({type: LOADING, payload: false});
      });
  };

  //logout
  const signout = async () => {
    try {
      dispatch({type: LOADING, payload: true});
      dispatch({type: LOGOUT});
      dispatch({type: LOADING, payload: false});
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        user: state.user,
        refreshToken: state.refreshToken,
        signin,
        signout,
        signup,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
