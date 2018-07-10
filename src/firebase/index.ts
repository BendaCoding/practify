import * as fb from 'firebase/app';
import 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
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

export const firebase = fb.initializeApp(config);
export const rsf = new ReduxSagaFirebase(firebase);

export const firestore = fb.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const googleAuthProvider = new fb.auth.GoogleAuthProvider();
export const facebookAuthProvider = new fb.auth.FacebookAuthProvider();

export const collections = {
  users: firestore.collection('users'),
}

export const storage = firebase.storage();

export { users };
