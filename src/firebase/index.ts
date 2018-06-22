import * as firebase from 'firebase';
import 'firebase/firestore';
import ReduxSagaFirebase from 'redux-saga-firebase';

import * as users from './users';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
};

export const fire = firebase.initializeApp(config);

// export const databaseRef = firebase.database();

export const rsFire = new ReduxSagaFirebase(fire);

export const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export const collections = {
  users: firestore.collection('users'),
}

export { users };
