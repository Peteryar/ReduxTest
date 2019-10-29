import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../app/App';
import {Provider} from 'react-redux';
import { createStore} from 'redux';
import {rootReducer} from '../app/Reducers';
import ReduxPromise from 'redux-promise';

const store = createStore(
    rootReducer,
);
ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>, document.getElementById('root'))