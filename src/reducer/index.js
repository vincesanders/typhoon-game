import { 
    SET_BOARD,
    SET_SELECTED,
    SET_FLIPPED } from '../actions/actions';

export const initialState = {
    board: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_SELECTED:
            return {
                ...state,
                board: state.board.map(card => {
                    if (card.id === action.payload) {
                        card = {
                            ...card,
                            selected: true
                        }
                    } else if (card.selected === true) {
                        card = {
                            ...card,
                            selected: false
                        }
                    }
                    return card;
                })
            };
        case SET_FLIPPED:
            return {
                ...state,
                board: state.board.map(card => {
                    if (card.id === action.payload) {
                        card = {
                            ...card,
                            flipped: true
                        }
                    }
                    return card;
                })
            };
        case SET_BOARD:
            return {
                ...state,
                board: action.payload.map((value, index) => {
                    return {
                        id: index,
                        value,
                        flipped: false,
                        selected: index === 0 ? true : false
                    };
                })
            }
        default:
            return state;
    }
}

export default reducer;