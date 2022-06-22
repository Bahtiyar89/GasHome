import {CLEAR_ERRORS, GET_HISTORY} from '../types';
import {LOGOUT, GET_PROFILE, LOADING_DETECTOR} from '../types';
import utility from '../../utils/Utility';

export default (state, action) => {
  switch (action.type) {
    case LOADING_DETECTOR:
      return {...state, loading_detector: action.payload};
    case GET_PROFILE:
      console.log('action : 3', action.payload);
      return {...state, profile: action.payload};

    case GET_HISTORY:
      console.log('payload : 3', action.payload);
      return {...state, detectorHistory: action.payload};

    default:
      return state;
  }
};
