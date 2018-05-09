import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import ScreenLoginCtn from './containers/ScreenLoginCtn.js';
import ScreenHomeCtn  from './containers/ScreenHomeCtn.js';
import rootReducer from './reducers/rootReducer.js';

console.log('ScreenLoginCtn:', ScreenLoginCtn);

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : (x)=>(x))
);


render(
    <Provider store={store}>
        <HashRouter>
            <div style={{width: '100%', height: '100%', backgroundColor: '#bbb'}} >
                <Route exact path="/" component={ ScreenLoginCtn }/>
                <Route path="/home" component={ ScreenHomeCtn }/>
            </div>
        </HashRouter>
    </Provider>
    , document.getElementById('content')
);


