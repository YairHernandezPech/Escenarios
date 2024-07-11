import React, { useState } from "react";
import "../../style.css";

const Asientos = ({ id }) => {

    const [estado, setEstado] = useState(true);

    const handleClick = () => {
        setEstado(!estado);
    };

    return (
        <div
            className={`seat ${estado ? 'available' : 'unavailable'}`}
            onClick={handleClick}
        >
            {/* {id} */}
            {!estado && <span className="seat-id">{id}</span>}
        </div>
        // <p>Icono de café: <i className="fa-regular fa-user"></i></p>
    );
}

export default Asientos;