import { UserActionTypes } from './user.type';

export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});