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
    device_count: 0,
    device_page: 0,
    detectorHistory: [],
    history_page: 0,
    imei: null,
    ch: null,
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
  const getHistory = async (imei, page, postsPerPage, bool) => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    console.log('page: ', page);
    doGet(
      `/device-pagination-api/${imei}/?page=${page}&page_size=${postsPerPage}`,
    )
      .then(({data}) => {
        console.log('data:: ', data);
        dispatch({
          type: types.GET_HISTORY_DEVICE,
          payload: {data, page, imei, bool},
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

  //GET History Count
  const getHistoryCount = async (imei, page, postsPerPage) => {
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    console.log('page: ', page);
    doGet(
      `/device-pagination-api/${imei}/?page=${page}&page_size=${postsPerPage}`,
    )
      .then(({data}) => {
        console.log('fff:: ', data);
        getHistory(imei, Math.ceil(data?.count / 10), 10, true);
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
  const getDevice = async page => {
    console.log('pp:', page);
    dispatch({type: types.LOADING_DETECTOR, payload: true});
    doGet(`/user-devices-pagination-api/?page=${page}`)
      .then(({data}) => {
        dispatch({type: types.LOADING_DETECTOR, payload: false});
        if (data.results.length != 0) {
          dispatch({
            type: types.DETECTORS,
            payload: {
              devices: data.results,
              device_page: page,
              device_count: data.count,
            },
          });
          getHistoryCount(data.results[0]?.imei, 1, 10);
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
        device_count: state.device_count,
        device_page: state.device_page,
        detectorHistory: state.detectorHistory,
        error: state.error,
        profile: state.profile,
        history_page: state.history_page,
        imei: state.imei,
        ch: state.ch,
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
