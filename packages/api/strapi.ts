import { UserProfile } from '#/packages/entities/types';

const LOCAL_STORAGE_CREDENTIAL_KEY = 'strapi:credentials';

const {
  NEXT_PUBLIC_STRAPI_API_URL = 'https://api-mvp.cantodaruaemergencial.com.br',
  // NEXT_PUBLIC_STRAPI_API_URL = 'http://localhost:1337',
} = process.env;

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

export class Api {
  static getHeaders = () => {
    const userProfile = getUserProfile();
    return {
      'Content-Type': 'application/json',
      Authorization: userProfile?.token ? `Bearer ${userProfile.token}` : '',
    };
  };

  static get = async (url: string) => {
    const options = {
      method: 'GET',
      headers: Api.getHeaders(),
    };
    const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/${url}`, options);
    return res.json();
  };

  static post = async (url: string, body = {}) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: Api.getHeaders(),
    };

    const res = await fetch(`${NEXT_PUBLIC_STRAPI_API_URL}/${url}`, options);
    return res.json();
  };
}

export async function validateUser(
  email: string,
  password: string,
): Promise<UserProfile> {
  try {
    const { status, data } = await Api.post('admin/login', { email, password });

    if (status !== 200) {
      throw new Error('Erro ao realizar login!');
    }

    const userProfile: UserProfile = {
      displayName:
        data?.user?.username ??
        `${data?.user?.firstname ?? ''} ${data?.user?.lastname ?? ''}`,
      token: data?.token,
      email: data?.user?.email,
    };

    localStorage.setItem(
      LOCAL_STORAGE_CREDENTIAL_KEY,
      JSON.stringify(userProfile),
    );

    return userProfile;
  } catch (error) {
    const message = error?.message || 'Falha ao conectar.';
    throw new Error(message);
  }
}
