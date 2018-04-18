import { combineReducers } from 'redux';

import userInfo from './userInfo.js';

const rootReducer = combineReducers({
    userInfo,
})

export default rootReducer;
