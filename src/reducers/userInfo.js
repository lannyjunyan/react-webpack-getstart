import deepFreeze from 'deep-freeze';

const initialState = {userName: '', password: ''};
//console.log('### initialState:', initialState);

const userInfo = (state = initialState, action) => {
    deepFreeze(state);
    switch(action.type) {
        case 'USERNAME_CHANGE':
            console.log('[rd] userName:', action.userName);
            return {...state, userName: action.userName};
        case 'PASSWORD_CHANGE':
            console.log('[rd] password:', action.password);
            return {...state, password: action.password};
        default:
            return state;
    }
};

export default userInfo;
