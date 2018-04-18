'use strict'

import React from 'react';

class ScreenHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleUserNameChange(event) {
        //this.setState({userName: event.target.value});
        console.log('username:', event.target.value);
    }

    handlePasswordChange(event) {
        //this.setState({password: event.target.value});
        console.log('password:', event.target.value);
    }

    handleSubmit(event) {
        //this.props.history.push(`/home`);
    }

    render() {
        return (
            <div style={ss.box}>
                This is home screen.
            </div>
        )
    }
}

const ss = {
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    form: {
        width: 150,
    },
}

export default ScreenHome;
