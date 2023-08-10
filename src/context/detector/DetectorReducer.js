import * as types from './types';

const INITIAL_STATE = {
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

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOADING_DETECTOR:
      return {...state, loading_detector: action.payload};
    case types.GET_PROFILE:
      return {...state, profile: action.payload};
    case types.UPDATE_PROFILE:
      return {...state, profile: action.payload};
    case types.GET_HISTORY_DEVICE:
      const {data, page, imei, bool} = action.payload;
      console.log('bool: ', bool);
      console.log('888 ', data.results?.slice(-1)[0]?.ch > 50);
      if (bool) {
        return {
          ...state,
          detectorHistory: data,
          history_page: page,
          imei,
          ch: data.results?.slice(-1)[0]?.ch,
        };
      } else {
        return {...state, detectorHistory: data, history_page: page, imei};
      }

    case types.DETECTORS:
      const {devices, device_page, device_count} = action.payload;

      const newDetectors = [];
      for (const d in devices) {
        const detector = {
          value: '',
          label: '',
        };
        detector.label = devices[d].name;
        detector.value = devices[d].imei;
        newDetectors.push(detector);
      }
      return {...state, detectors: newDetectors, device_page, device_count};
    case types.CLEAR_DETECTOR:
      return {...state, profile: null, detectorHistory: []};
    default:
      return state;
  }
};
