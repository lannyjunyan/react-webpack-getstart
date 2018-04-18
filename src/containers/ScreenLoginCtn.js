import { connect } from 'react-redux'
import ScreenLogin from '../components/ScreenLogin.jsx'
import { userNameChange, passwordChange } from '../actions/rootActions'
console.log('ScreenLogin:', ScreenLogin);

function mapStateToProps (state, ownProps) {
    return { userName: state.userInfo.userName, password: state.userInfo.devices };
}

function mapDispatchToProps(dispatch, myProps) {
    return {
        handleUserNameChange: (userName) => {
            //console.log('map dispatch. userName:', userName);
            dispatch(userNameChange(userName));
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

