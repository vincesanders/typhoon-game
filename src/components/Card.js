import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setFlipped } from '../actions/actions';
import tornado from '../assets/images/tornado.png';

const Card = props => {
    const dispatch = useDispatch();

    const flipCard = e => {
        if (!props.card.flipped) {
            dispatch(setFlipped(props.card.id));
        }
    }
    return (
        <CardContainer onClick={flipCard} style={props.card.selected ? {border: '5px solid red'} : {}}>
            {!props.card.flipped ? <div className='card-cover'></div> :
            <>
                {props.card.value >= 0 ? <h2>{props.card.value}</h2> : <img src={tornado} />}
            </>}
        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 7vw;
    height: 7vw;
    margin: 1.8vw;
    border: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    .card-cover {
        position: relative;
        top: 0;
        right: 0;

        z-index: 2;
        width: 100%;
        height: 100%;
        background-color: slateblue;
    }
    h2 {
        font-size: 5vw;
    }
    img {
        width: 5vw;
        height: 6vw;
    }
`

export default Card;