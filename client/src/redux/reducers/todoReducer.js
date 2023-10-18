import * as actionTypes from '../actions/type';

export const todoReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.payload];
        default: 
            return state;
    }
}
