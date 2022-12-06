import { actionTypes } from "./FormActionTypes";

export const initialState = {
    name: '',
    email: '',
    gender: '',
    education: '',
    term: false,
};


export const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case actionTypes.TOGGLE:
            return {
                ...state,
                term: !state.term
            }

        default:
            return state
    }

}