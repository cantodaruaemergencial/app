import { Api } from '#/packages/api/strapi';

class AuthService {
  static login = (email: string, password: string) =>
    Api.post('admin/login', { email, password });
}

export default AuthService;
