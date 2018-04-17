import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './components/Component.jsx';

ReactDom.render(
    <div style={{ backgroundColor: '#488', width: '100%', height: '100%' }}>
        <Component1 />
    </div>,
    document.getElementById('content')
);
