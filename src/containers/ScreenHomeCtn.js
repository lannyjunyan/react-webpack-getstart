import { connect } from 'react-redux'
import ScreenHome from '../components/ScreenHome.jsx'

function mapStateToProps (state, ownProps) {
    return { username: state.userInfo.username, password: state.userInfo.password };
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

