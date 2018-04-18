import { connect } from 'react-redux'
import ScreenHome from '../components/ScreenHome.jsx'

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

export default ScreenHomeCtn;

