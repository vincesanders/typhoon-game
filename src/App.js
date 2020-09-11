import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { setBoard } from './actions/actions';
import generateBoard from './utilities/generateBoardValues';
import Board from './components/Board';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBoard(generateBoard()));
  }, [dispatch])
  return (
    <div className="App">
      <h1>Typhoon Game</h1>
      <Board />
    </div>
  );
}

export default App;
