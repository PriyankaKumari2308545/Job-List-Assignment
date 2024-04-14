import Cookies from 'js-cookie';

export const isLoggedIn = () => {
  return Cookies.get('jwt_token') !== undefined;
};

export const logout = () => {
  Cookies.remove('jwt_token');
};
