import "../../style.css";
import React, { useState } from "react";

const Asientos = ({ id }) => {

    const [available, setAvailable] = useState(true);

    const handleClick = () => {
        setAvailable(!available);
    };

    return (
        <div
            className={`seat ${available ? 'available' : 'unavailable'}`}
            onClick={handleClick}
        >
            {!available && id}
        </div>
        // <p>Icono de café: <i className="fa-regular fa-user"></i></p>
    );
}

export default Asientos;