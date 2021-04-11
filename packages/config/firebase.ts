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
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

function makeGoogleProvider(): firebase.auth.GoogleAuthProvider {
  const provider = new firebase.auth.GoogleAuthProvider();
  return provider;
}

const LOCAL_STORAGE_KEY = 'firebase_credentials';
const getFirebaseCredential = (): string => {
  const credentialString = localStorage.getItem(LOCAL_STORAGE_KEY) ?? '{}';
  const { oauthIdToken } = JSON.parse(credentialString);
  return oauthIdToken;
};
const setFirebaseCredential = (credential: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, credential);
};

// Login and save credentials
export async function makeLogin(): Promise<firebase.auth.UserCredential> {
  const provider = makeGoogleProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  setFirebaseCredential(JSON.stringify(result.credential?.toJSON()));
  return result;
}

// Load previous session if available
export async function reloadSession(): Promise<firebase.auth.UserCredential> {
  const tokenId = getFirebaseCredential();
  const credential = firebase.auth.GoogleAuthProvider.credential(tokenId);
  const result = await firebase.auth().signInWithCredential(credential);
  return result;
}

// Reset local credentials
export function makeLogout() {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
