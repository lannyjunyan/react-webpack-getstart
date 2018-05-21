import deepFreeze from 'deep-freeze';
import dotProp from 'dot-prop-immutable';

const initialState = {
    deepObj: {username: 1, password: 2},
    deepArray: [3, 4, 5],
};
//console.log('### initialState:', initialState);

const immutab = (state = initialState, action) => {
    deepFreeze(state);
    switch(action.type) {
        case 'USERNAME_CHANGE':
            //state.deepObj = {...state.deepObj, username: action.username}; // Error for immutable.
            return {...state, deepObj: {...state.deepObj, username: action.username}};
        case 'PASSWORD_CHANGE':
            let state2 = dotProp.set(state, 'deepObj.password', action.password);
            console.log('state2:', state2);
            let state3 = dotProp.set(state2, 'deepObj.password2', action.password);
            //let state3 = dotProp.merge(state2, 'deepObj', {password2: action.password});
            console.log('state3:', state3);
            return state3;
        default:
            return state;
    }
};

export default immutab;

// https://github.com/debitoor/dot-prop-immutable
