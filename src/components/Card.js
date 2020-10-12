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
        <OuterCircleTwo>
        <OuterCircleOne>
        <CardContainer onClick={flipCard} className={props.card.selected ? 'selected' : ''}>
            {!props.card.flipped ? <div className='card-cover'></div> :
            <>
                {props.card.value >= 0 ? <h2>{props.card.value}</h2> : <img src={tornado} />}
            </>}
        </CardContainer>
        </OuterCircleOne>
        </OuterCircleTwo>
    );
}

const OuterCircleTwo = styled.div`
    width: 11vw;
    height: 11vw;
    margin: 0.4vw;
    border-right: 2px dashed;
    border-bottom: 2px dashed;
    border-radius: 50%;
    border-color: #525353;
    display: flex;
    justify-content: center;
    align-items: center;
`

const OuterCircleOne = styled.div`
    width: 9vw;
    height: 9vw;
    border-left: 2px solid;
    border-radius: 50%;
    border-color: #525353;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardContainer = styled.div`
    width: 8vw;
    height: 8vw;
    /* margin: 1.8vw; */
    border: 3px solid #f7ad1d;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.4s;
    color: #2D87E0;
    .card-cover {
	position: relative;
	top: 0;
	right: 0;
	z-index: 2;
	width: 100%;
    height: 100%;
    border-radius: 50%;
	background-color: #2f2f2f;
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