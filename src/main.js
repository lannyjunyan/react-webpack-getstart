import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import ScreenLoginCtn from './containers/ScreenLoginCtn.js';
import ScreenHomeCtn  from './containers/ScreenHomeCtn.js';
import rootReducer from './reducers/rootReducer.js';

console.log('ScreenLoginCtn:', ScreenLoginCtn);

const store = createStore(
    rootReducer,
    //applyMiddleware(middleware),
);


render(
    <Provider store={store}>
        <BrowserRouter>
            <div style={{width: '100%', height: '100%', backgroundColor: '#bbb'}} >
                <Route exact path="/" component={ ScreenLoginCtn }/>
                <Route path="/home" component={ ScreenHomeCtn }/>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('content')
);


