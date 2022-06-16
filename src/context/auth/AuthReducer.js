import {CLEAR_ERRORS} from '../types';
import {
  F4_POST_SUCC_BALANCE,
  LOGOUT,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FALSE_REDIRECT,
  VARIFY_OK,
  LOADING,
  CHECKOUT_ORDER,
  GET_CHECKOUT_ORDER,
  BALANCE_0,
  CLOSE_MODAL_BALANCE,
  REGISTER_SUCCESS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case SIGN_IN:
      return {...state, user: action.payload};
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
