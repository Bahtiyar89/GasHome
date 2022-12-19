import * as types from './types';

const INITIAL_STATE = {
  profile: null,
  loading_detector: false,
  error: false,
  detectors: [],
  detectorHistory: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADING_DETECTOR:
      return {...state, loading_detector: action.payload};
    case types.GET_PROFILE:
      return {...state, profile: action.payload};
    case types.UPDATE_PROFILE:
      return {...state, profile: action.payload};
    case types.GET_HISTORY_DEVICE:
      let newOs = Object.assign([], action.payload);
      console.log('newOs: ', newOs);
      console.log('state.detectorHistory: ', state.detectorHistory);
      return {...state, detectorHistory: action.payload};
    case types.DETECTORS:
      const newDetectors = [];
      for (const d in action.payload) {
        const detector = {
          value: '',
          label: '',
        };
        detector.label = action.payload[d].name;
        detector.value = action.payload[d].imei;
        newDetectors.push(detector);
      }
      return {...state, detectors: newDetectors};
    case types.CLEAR_DETECTOR:
      return {...state, profile: null, detectorHistory: []};
    default:
      return state;
  }
};
