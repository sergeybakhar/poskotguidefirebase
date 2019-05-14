import { HOME_PAGE } from './actionTypes';

export const isHomePage = val => ({
    type: HOME_PAGE,
    payload: {
        val
    }
});