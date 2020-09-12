import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { setBoard, setSelected, setFlipped } from './actions/actions';
import generateBoard from './utilities/generateBoardValues';
import Board from './components/Board';

function App() {
  const dispatch = useDispatch();
  const selected = useRef(0);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    dispatch(setBoard(generateBoard()));

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const keyLeft = () => {
    if (selected.current > 0) {
      selected.current = selected.current - 1
      dispatch(setSelected(selected.current));
    }
  }

  const keyRight = () => {
    if (selected.current < 35) {
      selected.current = selected.current + 1
      dispatch(setSelected(selected.current));
    }
  }

  const keyUp = () => {
    //This code will have to change on smaller screens
    //if the rows are less than 9.
    if (selected.current > 8) {
      selected.current = selected.current - 9
      dispatch(setSelected(selected.current));
    }
  }

  const keyDown = () => {
    if (selected.current < 27) {
      selected.current = selected.current + 9
      dispatch(setSelected(selected.current));
    }
  }

  const handleKeyDown = e => {
    switch (e.keyCode) {
      case 37:
        keyLeft();
        break;
      case 38:
        keyUp();
        break;
      case 39:
        keyRight();
        break;
      case 40:
        keyDown();
        break;
      case 13:
        dispatch(setFlipped(selected.current));
        break;
      default:
        break;
    }
  }

  return (
    <div className="App" >
      <MainHeader>Typhoon Game</MainHeader>
      <Board />
    </div>
  );
}

const MainHeader = styled.h1`
  width: 100%;
  font-size: 48px;
  text-align: center;
`

export default App;
