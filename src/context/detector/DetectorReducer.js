import {CLEAR_ERRORS} from '../types';
import {LOGOUT, GET_PROFILE, LOADING} from '../types';
import utility from '../../utils/Utility';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
    case GET_PROFILE:
      console.log('action : 3', action.payload);

      return {...state, profile: action.payload};

    default:
      return state;
  }
};
