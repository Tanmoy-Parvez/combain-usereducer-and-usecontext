import { actionTypes } from './CounterActionTypes';

export const initialState = 0;

export const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return state + action.payload;

        case actionTypes.DECREMENT:
            if (state === 0) {
                alert("You can't decrement more")  
                return state = 0
            }
            return state - action.payload;

        default:
            return state;
    }

}