import { HOME_PAGE } from '../actions/actionTypes';

const initialState = {
    isHomePage: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case HOME_PAGE: {
            const { val } = action.payload;
            return {
                ...state,
                isHomePage: val
            }
        }
        default:
            return state;
    }
}
