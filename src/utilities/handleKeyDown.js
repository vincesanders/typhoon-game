import { setSelected, setFlipped } from '../actions/actions';

const keyLeft = (dispatch, selected) => {
    if (selected > 0) {
    selected = selected - 1
    dispatch(setSelected(selected));
    }
    return selected;
}

const keyRight = (dispatch, selected) => {
    if (selected < 35) {
    selected = selected + 1
    dispatch(setSelected(selected));
    }
    return selected;
}

const keyUp = (dispatch, selected) => {
    //This code will have to change on smaller screens
    //if the rows are less than 9.
    if (selected > 8) {
    selected = selected - 8
    dispatch(setSelected(selected));
    }
    return selected;
}

const keyDown = (dispatch, selected) => {
    if (selected < 27) {
    selected = selected + 8
    dispatch(setSelected(selected));
    }
    return selected;
}

export const handleKeyDown = (e, dispatch, selected) => {
    switch (e.keyCode) {
    case 37:
        selected = keyLeft(dispatch, selected);
        break;
    case 38:
        selected = keyUp(dispatch, selected);
        break;
    case 39:
        selected = keyRight(dispatch, selected);
        break;
    case 40:
        selected = keyDown(dispatch, selected);
        break;
    case 13:
        dispatch(setFlipped(selected));
        break;
    default:
        break;
    }
    return selected;
}