// export const findCard = cardId => ({
//     type: 'FIND_CARD',
//     cardId
// });

export const findCard = cardId => {
    return (dispatch, getState) => {
        //make a call
        dispatch({
            type: 'FIND_CARD',
            cardId
        })
    }
}