import React from 'react';
import "../../style.css";
import Asientos from '../Scenary1/Asientos1'

const Escenario1 = () => {
    const seats = Array.from({ length: 70 }, (_, i) => i + 1); // Ajuste del número de asientos
    return (
        <div className="stage-container">
            <div style={{ marginTop: '100px' }}></div>
            <div class="stage">
                <div class="top-rect"></div>
                <div class="line left1"></div>
                <div class="line left2"></div>
                <div class="line left3"></div>
                <div class="line right1"></div>
                <div class="line right2"></div>
                <div class="line right3"></div>
                <div class="square left"></div>
                <div class="square right"></div>
                <div class="base-line"></div>
                <div class="bottom-rect"></div>
            </div>
            <div className="seats-container">
                {seats.map(seatId => (
                    <Asientos key={seatId} id={seatId} />
                ))}
            </div>
        </div>
    );
}

export default Escenario1;