import React from 'react';

const Card = props => {
  return (
    <div className="col s6 m4 l3">
      <div
        id={props.id}
        style={{backgroundImage: `url(${props.image})`}}
        className="paintings z-depth-2"
        onClick={() => props.imageClick(props.id)}
      />
    </div>
  );
}

export default Card;