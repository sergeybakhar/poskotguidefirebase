import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import './firebase/fbconfig.js';
import rrfConfig from './firebase/rrfconfig';
import firebase from 'firebase/app';
import 'firebase/auth';

const store = createStore(rootReducer, {})

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
