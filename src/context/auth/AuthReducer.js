import {CLEAR_ERRORS} from '../types';
import {
  LOGOUT,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
    case LOGIN_SUCCESS:
      console.log('action.payload: 3', action.payload);
      let {refresh, access, id} = action.payload;
      return {...state, user: {refresh, access, id}};
    case SIGN_UP_SUCCESS:
      console.log('reducer', action.payload);
      return {...state, ddd: action.payload};
    case LOGOUT:
      utility.removeItem('token');
      utility.removeItem('user');
      utility.removeItem('wkeys');
      console.log('LOGOUT : ');
      return {
        ...state,
        isSigned: false,
        loading: false,
        user: null,
        error: [],
      };
    case CLEAR_ERRORS:
      return {...state, error: null};

    default:
      return state;
  }
};
