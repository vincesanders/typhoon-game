import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { setBoard, setSelected, setFlipped } from './actions/actions';
import generateBoard from './utilities/generateBoardValues';
import Board from './components/Board';

import { handleKeyDown } from './utilities/handleKeyDown';

function App() {
  const dispatch = useDispatch();
  const selected = useRef(0);

  const handleKeyEvent = e => {
    selected.current = handleKeyDown(e, dispatch, selected.current);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent);
    dispatch(setBoard(generateBoard()));

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
    };
  }, [dispatch]);

  return (
    <div className="App" >
      <MainHeader>Typhoon Game</MainHeader>
      <Board />
    </div>
  );
}

const MainHeader = styled.h1`
  width: 100%;
  font-size: 60px;
  text-align: center;
  color: #2D87E0;
`

export default App;
