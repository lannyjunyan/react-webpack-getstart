import { combineReducers } from 'redux';

import userInfo from './userInfo.js';
import immutable from './immutable.js';

const rootReducer = combineReducers({
    userInfo,
    //immutable,
})

export default rootReducer;
