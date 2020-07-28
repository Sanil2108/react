import { combineReducers } from 'redux';

import userReducer from './userReducer';
import listReducer from './listReducer';
import counterReducer from './counterReducer';

export default combineReducers({ users: userReducer, list: listReducer, counter: counterReducer });
