import { connect } from 'react-redux'
import ScreenLogin from '../components/ScreenLogin.jsx'
import { usernameChange, passwordChange } from '../actions/rootActions'
console.log('ScreenLogin:', ScreenLogin);

function mapStateToProps (state, ownProps) {
    return { username: state.userInfo.username, password: state.userInfo.password };
}

function mapDispatchToProps(dispatch, myProps) {
    return {
        handleUsernameChange: (username) => {
            //console.log('map dispatch. username:', username);
            dispatch(usernameChange(username));
        },
        handlePasswordChange: (password) => {
            //console.log('map dispatch. password:', password);
            dispatch(passwordChange(password));
        },
    }
}

const ScreenLoginCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenLogin);

console.log('ScreenLoginCtn:', ScreenLoginCtn);

export default ScreenLoginCtn;

