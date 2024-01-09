import React from "react";
//import image from '../images/testimony-cuatro.jpg'; 
import '../stylesheets/Testimony.css';

function Testimony(props) {
  return (
    <div className='testimony-container'>
      <img
        className='testimony-image'
        src={require(`../images/testimony-${props.image}.jpg`)}
        alt='Imagen de una senora' />
      <div className='text-container-testimony'>
        <p className='testimony-name'> 
        <strong>{props.name}</strong> en {props.country} </p>
        <p className='testimony-position'>{props.position}<strong>{props.company}</strong></p>
        <p className='testimony-text'>"{props.testimony}"</p>
      </div>
    </div>
  );
}

export default Testimony;