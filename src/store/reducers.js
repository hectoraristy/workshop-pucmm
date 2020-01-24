import InitialState from './initial-state';
import ActionTypes from './action-types';
import { combineReducers } from 'redux'

const user = (state = InitialState, action) => {
    switch (action.type) {
      case ActionTypes.SET_VALUE:
        return {
            ...state,
            value: action.text,
        }
      default:
        return state
    }
  }
  export default combineReducers({user});
