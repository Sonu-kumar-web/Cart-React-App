import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCrY9JwniruNwMDF_LDpQnMkXwbX_RV-tQ",
    authDomain: "cart-fb1c2.firebaseapp.com",
    databaseURL: "https://cart-fb1c2.firebaseio.com",
    projectId: "cart-fb1c2",
    storageBucket: "cart-fb1c2.appspot.com",
    messagingSenderId: "357252908757",
    appId: "1:357252908757:web:9a256467bb5fe54e93445c"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />,document.getElementById('root'));
