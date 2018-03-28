import React from 'react';
import "./Card.css";

const Card = props => (
  <button onClick={() => props.handleOnchange(props.id)}>
    <div className="card">
      <div className="img-container">
        <img id={props.id} src={props.image} alt={props.name}/>
      </div>
    </div>
  </button>
);

export default Card;