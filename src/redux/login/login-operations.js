import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './login-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/users';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */

export const register = params => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('/signup', params);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */

export const onLogin = params => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/login', params);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */

export const onLogout = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    const response = await axios.post('/logout');
    dispatch(logoutSuccess(response));
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

export const onGetUser = () => async (dispatch, getState) => {
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.post('/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
