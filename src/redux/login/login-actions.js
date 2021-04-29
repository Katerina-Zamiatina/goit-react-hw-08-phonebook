import { createAction } from '@reduxjs/toolkit';

export const fetchLoginRequest = createAction('contacts/fetchLoginRequest');
export const fetchLoginSuccess = createAction('contacts/fetchLoginSuccess');
export const fetchLoginError = createAction('contacts/fetchLoginError');

export const addLoginRequest = createAction('contacts/addLoginRequest');
export const addLoginSuccess = createAction('contacts/addLoginSuccess');
export const addLoginError = createAction('contacts/addLoginError');

export const deleteLoginRequest = createAction('contacts/deleteLoginRequest');
export const deleteLoginSuccess = createAction('contacts/deleteLoginSuccess');
export const deleteLoginError = createAction('contacts/deleteLoginError');
