'use strict'

import React from 'react';

class ScreenHome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={ss.box}>
                <p>This is home screen.</p>
                <p>From Screen: {this.props.location.state.fromScreen}</p>
                <p>{this.props.username} has logged in.</p>
            </div>
        )
    }
}

const ss = {
    box: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
}

export default ScreenHome;
