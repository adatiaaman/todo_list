import * as actionTypes from '../actions/type';

export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
    switch(action.type) {
        case 'TOGGLE_TABS':
            return action.selector;
        default: 
            return state;
    }
}    