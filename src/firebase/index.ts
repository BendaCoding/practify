import * as firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

export const fire = firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();
export const exercisesRef = databaseRef.child('exercises');

export const rsFire = new ReduxSagaFirebase(fire);