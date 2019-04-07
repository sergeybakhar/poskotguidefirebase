import { combineReducers } from 'redux';
import 'firebase/database'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
});

export default rootReducer;
