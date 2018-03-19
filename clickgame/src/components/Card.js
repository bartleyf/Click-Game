import React from 'react';

const Card = props => (
    <div className="col=sm=3">
        <img src="imageSrc" alt={props.name} className="img-thumbnail" onClick={props.validateGuess(props.id)} />
    </div>
)

export default Card;