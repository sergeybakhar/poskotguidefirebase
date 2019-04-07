import firebase from 'firebase/app'
import 'firebase/auth'

const fbConfig = {
    apiKey: "AIzaSyANkxCvu68VFYfELBym-1QkAsiMTMUHlrQ",
    authDomain: "poskotguide.firebaseapp.com",
    databaseURL: "https://poskotguide.firebaseio.com",
    projectId: "poskotguide",
    storageBucket: "poskotguide.appspot.com",
    messagingSenderId: "382050059637"
}

if (!firebase.apps.length) {
    firebase.initializeApp(fbConfig);
}

export default fbConfig;

