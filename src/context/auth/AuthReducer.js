import {CLEAR_ERRORS} from '../types';
import {
  LOGOUT,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOADING,
} from '../types';
import utility from '../../utils/Utility';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
    case LOGIN_SUCCESS:
      console.log('action.payload: 3', action.payload);
      let {refresh, access, id} = action.payload;
      utility.setItemObject('user', {refresh, id});
      utility.setItemObject('token', access);
      return {...state, user: {refresh, access, id}};
    case SIGN_UP_SUCCESS:
      console.log('reducer', action.payload);
      return {...state, ddd: action.payload};
    case LOGOUT:
      const b = utility.removeItem('user');
      console.log('LOGOUT : ', b);
      return {
        ...state,
        loading: false,
        user: {},
        error: [],
      };
    case CLEAR_ERRORS:
      return {...state, error: null};

    default:
      return state;
  }
};
