// import { createSelector } from '@reduxjs/toolkit';

export const getIsLogged = state => state.login.token;

export const getUserName = state => state.login.user.name;
