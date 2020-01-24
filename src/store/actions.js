import ActionTypes from './action-types';

export const setValue = text => ({
    type: ActionTypes.SET_VALUE,
    text
});