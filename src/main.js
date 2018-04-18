import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ScreenLogin from './components/ScreenLogin.jsx';
import ScreenHome from './components/ScreenHome.jsx';

render(
    <BrowserRouter>
        <div style={{width: '100%', height: '100%', backgroundColor: '#bbb'}} >
            <Route exact path="/" component={ ScreenLogin }/>
            <Route path="/home" component={ ScreenHome }/>
        </div>
    </BrowserRouter>
    , document.getElementById('content')
);

