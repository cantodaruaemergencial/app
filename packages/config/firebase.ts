import firebase from 'firebase';

import 'firebase/auth';
import {
  API_KEY,
  APP_ID,
  MEASUREMENT_ID,
  MESSAGING_SENDER_ID,
  PROJECT_ID,
} from './env';

const firebaseConfig = {
  appId: APP_ID,
  apiKey: `${API_KEY}`,
  projectId: PROJECT_ID,
  measurementId: MEASUREMENT_ID,
  messagingSenderId: MESSAGING_SENDER_ID,
  authDomain: `${PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${PROJECT_ID}.appspot.com`,
  databaseURL: `https://${PROJECT_ID}.firebaseio.com`,
};

// Initialize Firebase
export function setupFirebase(): void {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.error(err);
  }
}

function makeGoogleProvider(): firebase.auth.GoogleAuthProvider {
  const provider = new firebase.auth.GoogleAuthProvider();
  return provider;
}

export async function makeLogin(): Promise<firebase.auth.UserCredential> {
  const provider = makeGoogleProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  if (result == null) throw new Error('result is null');
  return result;
}
