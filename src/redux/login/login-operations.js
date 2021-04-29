import axios from 'axios';
import * as actions from './login-actions-actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchLogin = () => async dispatch => {
  dispatch(actions.fetchLoginRequest());

  try {
    const { data } = await axios.get('/contacts');
    dispatch(actions.fetchLoginSuccess(data));
  } catch (error) {
    dispatch(actions.fetchLoginError(error));
  }
};

export const addLogin = payload => dispatch => {
  dispatch(actions.addLoginRequest());
  axios
    .post('/contacts', payload)
    .then(({ data }) => dispatch(actions.addLoginSuccess(data)))
    .catch(error => dispatch(actions.addLoginError(error)));
};

export const deleteLogin = payload => dispatch => {
  dispatch(actions.deleteLoginRequest());
  axios
    .delete(`/contacts/${payload}`)
    .then(() => dispatch(actions.deleteLoginSuccess(payload)))
    .catch(error => dispatch(actions.deleteLoginError(error)));
};
