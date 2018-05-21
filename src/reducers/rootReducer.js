import { combineReducers } from 'redux';

import userInfo from './userInfo.js';
import immutab from './immutab.js';

const rootReducer = combineReducers({
    userInfo,
    //immutab,
})

export default rootReducer;
