import { UserProfile } from '#/packages/entities/types';

const LOCAL_STORAGE_CREDENTIAL_KEY = 'strapi:credentials';
const { NEXT_PUBLIC_STRAPI_API_URL = 'http://localhost:1337' } = process.env;

const providerPaths = {
  google: {
    redirect: 'connect/google',
    callback: 'auth/google/callback',
  },
};

export function handleGoogleRedirect(): void {
  document.location.href = `${NEXT_PUBLIC_STRAPI_API_URL}/${providerPaths.google.redirect}`;
}

export async function validateUser(token: string): Promise<UserProfile> {
  try {
    const res = await fetch(
      `${NEXT_PUBLIC_STRAPI_API_URL}/${providerPaths.google.callback}${token}`,
    );

    const data = await res.json();

    const userProfile: UserProfile = {
      displayName: data?.user?.username,
      key: data?.jwt,
      email: data?.user?.email,
      provider: data?.user?.provider,
    };

    localStorage.setItem(
      LOCAL_STORAGE_CREDENTIAL_KEY,
      JSON.stringify(userProfile),
    );

    return userProfile;
  } catch (error) {
    // TODO: Need to create error system, maybe setup an error boundry.
    throw new Error('Failed to connect');
  }
}

export function getUserProfile(): UserProfile | null {
  const credentialString = localStorage.getItem(LOCAL_STORAGE_CREDENTIAL_KEY);
  if (credentialString == null) return null;

  const userProfile: UserProfile = JSON.parse(credentialString);

  if (!userProfile) return null;

  return userProfile;
}

// Reset local credentials
export function makeLogout() {
  localStorage.removeItem(LOCAL_STORAGE_CREDENTIAL_KEY);
}
