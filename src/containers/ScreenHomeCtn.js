import { connect } from 'react-redux'
import ScreenHome from '../components/ScreenHome.jsx'
console.log('ScreenHome:', ScreenHome);

function mapStateToProps (state, ownProps) {
    return { userName: state.userInfo.userName, password: state.userInfo.devices };
}

function mapDispatchToProps(dispatch, myProps) {
    return {
    }
}

const ScreenHomeCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenHome);

console.log('ScreenHomeCtn:', ScreenHomeCtn);

export default ScreenHomeCtn;

