import { UserProfile } from '#/packages/entities/types';

const LOCAL_STORAGE_CREDENTIAL_KEY = 'strapi:credentials';

const {
  NEXT_PUBLIC_STRAPI_API_URL = 'https://api-mvp.cantodaruaemergencial.com.br',
} = process.env;

export class Api {
  static get = async (url: string) => {
    const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/${url}`);
    return res.json();
  };

  static post = async (url: string, body = {}) => {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await fetch(
      `${NEXT_PUBLIC_STRAPI_API_URL}/${url}`,
      requestOptions,
    );

    return res.json();
  };
}

export async function validateUser(
  email: string,
  password: string,
): Promise<UserProfile> {
  try {
    const { data } = await Api.post('admin/login', { email, password });

    const userProfile: UserProfile = {
      displayName:
        data?.user?.username ??
        `${data?.user?.firstname ?? ''} ${data?.user?.lastname ?? ''}`,
      key: data?.token,
      email: data?.user?.email,
    };

    localStorage.setItem(
      LOCAL_STORAGE_CREDENTIAL_KEY,
      JSON.stringify(userProfile),
    );

    return userProfile;
  } catch (error) {
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

export function makeLogout() {
  localStorage.removeItem(LOCAL_STORAGE_CREDENTIAL_KEY);
}
