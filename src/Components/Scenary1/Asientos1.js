import React, { useState } from "react";
import "../../style.css";

const Asientos1 = ({ id }) => {

    const [estado, setEstado] = useState(true);

    const handleClick = () => {
        setEstado(!estado);
    };

    return (
        <div
            className={`seat ${estado ? 'available' : 'unavailable'}`}
            onClick={handleClick}
        >
            {!estado && id}
        </div>
        // <p>Icono de café: <i className="fa-regular fa-user"></i></p>
    );
}

export default Asientos1;