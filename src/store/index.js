import { createStore, combineReducers } from 'redux';
import heroes from '../reducers/heroes';
import filtersReducer from '../reducers/filters';

const store = createStore( combineReducers({heroes, filters: filtersReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;