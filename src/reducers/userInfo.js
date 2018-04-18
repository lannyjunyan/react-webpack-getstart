const initialState = {userName: '', password: ''};
//console.log('### initialState:', initialState);

const userInfo = (state = initialState, action) => {
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
