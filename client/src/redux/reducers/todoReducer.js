import * as actionTypes from '../actions/type';

export const todoReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO:
            return [...state, action.payload];
        case actionTypes.GET_ALL_TODOS:
            return action.payload;
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => {
                if(todo._id === action.payload._id) {
                    return {...todo, done: !todo.done}
                }
                return todo;
            });
        case actionTypes.UPDATE_TODO:
            return state.map(todo => {
                if(todo._id === action.payload._id) {
                    return {...todo, data: action.payload.data}
                }
                return todo;
            });
        case actionTypes.DELETE_TODO:
            return state.filter(todo => todo._id !== action.payload._id);
        default: 
            return state;
    }
}
