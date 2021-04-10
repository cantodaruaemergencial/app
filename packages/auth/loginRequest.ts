import { UserProfile } from '../entities/types';

import { makeLogin } from '#/packages/config/firebase';

export async function loginRequest(): Promise<UserProfile> {
  try {
    const result = await makeLogin();

    const { credential, user } = result;
    if (credential == null) throw new Error('credential is null');
    if (user == null) throw new Error('user is null');

    // This gives you a Google Access Token. You can use it to access the Google API.
    return {
      displayName: user.displayName ?? '',
      email: user.email ?? '',
    };
  } catch (error) {
    // The email of the user's account used.
    const { code, message, email, credential } = error;
    throw TypeError(
      JSON.stringify({
        message,
        code,
        email,
        credential,
      }),
    );
  }
}
