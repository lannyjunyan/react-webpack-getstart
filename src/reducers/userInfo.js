const initialState = {username: '', password: ''};
//console.log('### initialState:', initialState);

const userInfo = (state = initialState, action) => {
    switch(action.type) {
        case 'USERNAME_CHANGE':
            console.log('[rd] username:', action.username);
            return {...state, username: action.username};
        case 'PASSWORD_CHANGE':
            console.log('[rd] password:', action.password);
            return {...state, password: action.password};
        default:
            return state;
    }
};

export default userInfo;
