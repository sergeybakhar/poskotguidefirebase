import { combineReducers } from 'redux';
import 'firebase/database';
import { firebaseReducer } from 'react-redux-firebase';
import homePageReducer from './homePageReducer';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    homePageReducer
});

export default rootReducer;
