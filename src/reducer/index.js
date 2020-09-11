import { SET_BOARD } from '../actions/actions';

export const initialState = {
    board: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_BOARD:
            return {
                ...state,
                board: action.payload.map((value, index) => {
                    const card = {
                        id: index,
                        value,
                        flipped: false,
                        selected: false
                    };
                    if (index === 0) {
                        card.selected === true;
                    }
                    return card;
                })
            }
        default:
            return state;
    }
}

export default reducer;