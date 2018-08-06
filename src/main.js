import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

render(
    <div>welcome</div>,
    document.getElementById('content')
);


