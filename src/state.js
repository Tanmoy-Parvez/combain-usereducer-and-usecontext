import { actionTypes } from './actionTypes';

export const initialState = 0;

export const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + action.payload;

        case actionTypes.DECREMENT:
            return state - action.payload;

        default:
            return state;
    }

}