import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Card from './Card';

const Board = () => {
    const board = useSelector(state => state.board);
    return (
        <BoardContainer>
            {board.map(card => {
                return <Card key={`Card-${card.id}`} card={card} />
            })}
        </BoardContainer>
    );
}

const BoardContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    flex-wrap: wrap;
`

export default Board;