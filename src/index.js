import Promise from 'promise-polyfill';
if (!window.Promise) {
    window.Promise = Promise;
}
// Promise explorer 호환
import 'whatwg-fetch';
// fetch explorer 호환


import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import React from 'react';
import ReactDOM from 'react-dom';
//React

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
const store = createStore(reducers, applyMiddleware(thunk));
//Redux

import { App } from './containers';
//Entry point

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store = {store}>
                <Component/>
            </Provider>
        </AppContainer>
        , document.getElementById('root'));
};

render(App);
//render

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        render(App)
    });
}
//react-hot-loader