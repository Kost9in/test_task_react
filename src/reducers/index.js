import { combineReducers } from 'redux';
import data from './data';
import nav from './nav';

const reducers = {
    data,
    nav
};

export default combineReducers(reducers);