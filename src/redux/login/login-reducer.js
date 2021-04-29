import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  addLoginRequest,
  addLoginSuccess,
  addLoginError,
  deleteLoginRequest,
  deleteLoginSuccess,
  deleteLoginError,
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginError,
  filterLogin,
} from './login-actions';

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' }

const items = createReducer([], {
  [fetchLoginSuccess]: (_, { payload }) => payload,
  [addLoginSuccess]: (state, { payload }) =>
    state.find(contact => contact.name === payload.name)
      ? alert(`${payload.name} is already in contacts`)
      : [...state, payload],
  [deleteLoginSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer('', {
  [filterLogin]: (_, action) => action.payload,
});

const loading = createReducer(false, {
  [addLoginRequest]: () => true,
  [addLoginSuccess]: () => false,
  [addLoginError]: () => false,
  [deleteLoginRequest]: () => true,
  [deleteLoginSuccess]: () => false,
  [deleteLoginError]: () => false,
  [fetchLoginRequest]: () => true,
  [fetchLoginSuccess]: () => false,
  [fetchLoginError]: () => false,
});

export default combineReducers({ items, filter, loading });
