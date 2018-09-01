
export const SET_USER_INFO = 'SET_USER_INFO';
export const setUserInfo = (data) => ({
  type: SET_USER_INFO,
  payload: {...data}
});

export const GET_USER_INFO = "GET_USER_INFO";
export const getUserInfo = () => ({
  type: GET_USER_INFO
});

export const REMOVE_USER_INFO = 'REMOVE_USER_INFO';
export const removeUserInfo = () => ({
  type: REMOVE_USER_INFO
});
