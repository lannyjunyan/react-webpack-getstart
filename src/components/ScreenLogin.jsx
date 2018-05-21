'use strict'

import React from 'react';

class ScreenLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleUsernameChange(event) {
        //console.log('username:', event.target.value);
        //this.setState({username: event.target.value});
        this.props.handleUsernameChange(event.target.value);
    }

    handlePasswordChange(event) {
        //console.log('password:', event.target.value);
        //this.setState({password: event.target.value});
        this.props.handlePasswordChange(event.target.value);
    }

    handleSubmit(event) {
        //this.props.history.push(`/home`);
        this.props.history.push({
            pathname:'/home',
            state: {
                fromScreen: 'ScreenLogin',
            },
        });
    }

    render() {
        return (
            <div style={ss.box}>
                    <label>
                        Name: <input type="text" style={ss.form} onChange={this.handleUsernameChange.bind(this)} value={this.props.username} />
                    </label>

                    <label>
                        Password: <input type="text" style={ss.form} onChange={this.handlePasswordChange.bind(this)} value={this.props.password}/>
                    </label>

                    <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)}/>
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

export default ScreenLogin;
