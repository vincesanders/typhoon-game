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