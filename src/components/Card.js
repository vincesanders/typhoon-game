import React from 'react';

const Card = props => {
    return (
        <div>
            <h2>{props.card.value}</h2>
        </div>
    );
}

export default Card;