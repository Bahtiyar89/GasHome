import React, {useReducer} from 'react';
import {useToast} from 'react-native-toast-notifications';

import DetectorContext from './DetectorContext';
import DetectorReducer from './DetectorReducer';
import {doGet, doPost, doPatch} from '../../utils/apiActions';

import * as types from './types';

const DetectorState = props => {
  const toast = useToast();
  const initialState = {
    profile: null,
    loading_detector: false,
    error: false,
    detectors: [],
    detectorHistory: [],
  };

  const [state, dispatch] = useReducer(DetectorReducer, initialState);

  //Profile User
  const getProfile = async () => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    doGet('/accounts/profile-api/')
      .then(({data}) => {
        dispatch({
          type: types.GET_PROFILE,
          payload: data,
        });
        dispatch({type: types.LOADING_DETECTOR, payload: false});
      })
      .catch(error => {
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: types.LOADING_DETECTOR, payload: false});
      });
  };

  //GET History
  const getHistory = async imei => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    doGet(`/device-api/${imei}/`)
      .then(({data}) => {
        dispatch({
          type: types.GET_HISTORY_DEVICE,
          payload: data,
        });
        dispatch({type: types.LOADING_DETECTOR, payload: false});
      })
      .catch(error => {
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: types.LOADING_DETECTOR, payload: false});
      });
  };

  //GET Device
  const getDevice = async () => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    doGet(`/user-devices-api/?`)
      .then(({data}) => {
        dispatch({type: types.LOADING_DETECTOR, payload: false});
        if (data.length != 0) {
          dispatch({type: types.DETECTORS, payload: data});
          getHistory(data[0]?.imei);
        }
      })
      .catch(error => {
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: types.LOADING_DETECTOR, payload: false});
      });
  };

  //PATCH Profile
  const patchProfile = async formData => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    doPatch(`/accounts/profile-api/`, formData)
      .then(({data}) => {
        dispatch({type: types.UPDATE_PROFILE, payload: data});
      })
      .catch(error => {
        toast.show(JSON.stringify(error.message), {
          type: 'warning',
          duration: 3000,
          animationType: 'zoom-in',
        });

        dispatch({type: types.LOADING_DETECTOR, payload: false});
      });
  };

  //Clean Profile
  const cleanDetector = async () => {
    dispatch({type: types.CLEAR_DETECTOR});
  };

  return (
    <DetectorContext.Provider
      value={{
        loading_detector: state.loading_detector,
        detectors: state.detectors,
        detectorHistory: state.detectorHistory,
        error: state.error,
        profile: state.profile,
        getDevice,
        getProfile,
        getHistory,
        cleanDetector,
        patchProfile,
      }}>
      {props.children}
    </DetectorContext.Provider>
  );
};

export default DetectorState;
