import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { todoReducer } from './reducers/todoReducer';
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    todos: todoReducer,
    currentTab: tabReducer
});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;