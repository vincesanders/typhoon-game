export const SET_BOARD = "SET_BOARD";
export const SET_SELECTED = "SET_SELECTED";
export const SET_FLIPPED = "SET_FLIPPED";

export const setBoard = (valuesArray) => {
    return {type: SET_BOARD, payload: valuesArray}
}

export const setSelected = id => {
    return {type: SET_SELECTED, payload: id};
}

export const setFlipped = id => {
    return {type: SET_FLIPPED, payload: id};
}