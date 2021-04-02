import { makeLogin } from '@packages/config/firebase';

export async function login(): Promise<void> {
  try {
    const result = await makeLogin();

    const { credential, user } = result;
    if (credential == null) throw new Error('credential is null');
    if (user == null) throw new Error('user is null');

    // This gives you a Google Access Token. You can use it to access the Google API.
    console.log(credential.toJSON());
    console.log(user.displayName);
  } catch (error) {
    // The email of the user's account used.
    const { code, message, email, credential } = error;
    console.error({
      message,
      code,
      email,
      credential,
    });
  }
}
