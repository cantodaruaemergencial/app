import firebase from 'firebase';

import { UserProfile } from '#/packages/entities/types';

const LOCAL_STORAGE_CREDENTIAL_KEY = 'firebase:credentials';

// Login and save credentials
export async function makeLogin(): Promise<firebase.auth.UserCredential> {
  const provider = new firebase.auth.GoogleAuthProvider();
  const result = await firebase.auth().signInWithPopup(provider);
  const credentialPayload = JSON.stringify(result);
  localStorage.setItem(LOCAL_STORAGE_CREDENTIAL_KEY, credentialPayload);
  return result;
}

// Reset local credentials
export function makeLogout() {
  localStorage.removeItem(LOCAL_STORAGE_CREDENTIAL_KEY);
}

export function getUserProfile(): UserProfile {
  const credentialString = localStorage.getItem(LOCAL_STORAGE_CREDENTIAL_KEY);
  if (credentialString == null) throw TypeError('No user data, please login');

  const { user }: firebase.auth.UserCredential = JSON.parse(credentialString);
  return {
    displayName: user?.displayName ?? '',
    email: user?.email ?? '',
  };
}
