import React, {useReducer} from 'react';
import axios from 'axios';
import {useToast} from 'react-native-toast-notifications';

import DetectorContext from './DetectorContext';
import DetectorReducer from './DetectorReducer';
import {doGet, doPost} from '../../utils/apiActions';

import {LOADING, GET_PROFILE} from '../types';

const DetectorState = props => {
  const toast = useToast();
  const initialState = {
    profile: null,
    loading: false,
    error: false,
  };

  const [state, dispatch] = useReducer(DetectorReducer, initialState);

  //Profile User
  const getProfile = async navigation => {
    dispatch({type: LOADING, payload: true});
    doGet('/accounts/profile-api/')
      .then(({data}) => {
        console.log('data 55: ', data);
        dispatch({
          type: GET_PROFILE,
          payload: data,
        });
        dispatch({type: LOADING, payload: false});
        navigation.navigate('ProfileScreen');
      })
      .catch(error => {
        console.log('errorr ', JSON.stringify(error));
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: LOADING, payload: false});
      });
  };

  return (
    <DetectorContext.Provider
      value={{
        loading: state.loading,
        error: state.error,
        profile: state.profile,
        getProfile,
      }}>
      {props.children}
    </DetectorContext.Provider>
  );
};

export default DetectorState;
