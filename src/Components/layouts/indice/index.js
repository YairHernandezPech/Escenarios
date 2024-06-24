import React, { useState } from 'react';
import "../../../style.css";



const Seat = ({ available, image }) => {
  return (
    <div className="status">
      <img src={image} alt={available} />
      <p>{available}</p>
    </div>
  );
};

const Indice = ({ availableImage, unavailableImage, occupiedImage }) => {
  
  return (
    <div class="indice">
      <Seat available="Asiento No Disponible" image={availableImage} />
      <Seat available="Asiento Disponible" image={unavailableImage} />
      <Seat available="Asiento Ocupado" image={occupiedImage} />
    </div>
  );
};

export default Indice;
