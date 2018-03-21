import React from 'react';

const Card = props => (
    <div className="col=sm=3">
        <img src={props.imageSrc} alt={props.name} />
    </div>
)

export default Card;