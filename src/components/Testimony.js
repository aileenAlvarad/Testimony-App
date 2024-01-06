import React from "react";
import image from '../images/senora1.jpg'; 
import '../stylesheets/Testimony.css';

function Testimony() {
  return (
    <div className='testimony-container'>
      <img
        className='testimony-image'
        src={image}
        alt='Imagen de una senora'
      />
      <div className='text-container-testimony'>
        <p className='testimony-name'>Dora Maria en   México</p>
        <p className='testimony-position'>Dulcería la Bodeguita</p>
        <p className='testimony-text'>"Si buscas piñatas de alta
          calidad que agreguen diversión y alegría a cualquier celebración,
          ¡este es definitivamente el lugar para encontrarlas! Recomiendo encarecidamente
          estas piñatas a todos los que quieran asegurarse de tener una fiesta inolvidable."</p>
      </div>
    </div>
  );
}

export default Testimony;