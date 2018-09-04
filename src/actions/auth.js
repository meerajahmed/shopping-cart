
export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const setAuthToken = (token) => ({
  type: SET_AUTH_TOKEN,
  payload: {token}
});

export const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';
export const removeAuthToken = () => ({
  type: REMOVE_AUTH_TOKEN
});

export const SIGN_UP = 'SIGN_UP';
export const signUp = (user) => ({
  type: SIGN_UP,
  payload: {user}
});

export const LOGIN = 'LOGIN';
export const login = (user) => ({
  type: LOGIN,
  payload: {user}
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
  type: LOGOUT
});