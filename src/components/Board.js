import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';

const Board = () => {
    const board = useSelector(state => state.board);
    return (
        <div>
            {board.map(card => {
                return <Card card={card} />
            })}
        </div>
    );
}

export default Board;