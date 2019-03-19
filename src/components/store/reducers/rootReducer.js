import cardReducer from './cardReducer';
import cardsListReducer from './cardsListReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cardsList: cardsListReducer,
    card: cardReducer
});

export default rootReducer;
