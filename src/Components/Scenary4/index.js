import React, { Fragment } from 'react';
import "../../style.css";
import Asientos from '../../Components/componentes/Asientos'
import Symbology from '../componentes/symbology'
import Header from '../componentes/header'

const Escenario = () => {
  const seatsLeft = [
    [{id: 31, name: "test"}, {id: 32, name: "test"}, {id: 33, name: "test"}],
    [{id: 34, name: "test"}, {id: 35, name: "test"}, {id: 36, name: "test"}],
    [{id: 37, name: "test"}, {id: 38, name: "test"}, {id: 39, name: "test"}],
    [{id: 40, name: "test"}, {id: 41, name: "test"}, {id: 42, name: "test"}],
    [{id: 43, name: "test"}, {id: 44, name: "test"}, {id: 45, name: "test"}],
    [{id: 46, name: "test"}, {id: 47, name: "test"}, {id: 48, name: "test"}],
  ];
  const seatsRight = [
    [{id: 48, name: "test"}, {id: 49, name: "test"}, {id: 50, name: "test"}],
    [{id: 51, name: "test"}, {id: 52, name: "test"}, {id: 53, name: "test"}],
    [{id: 54, name: "test"}, {id: 55, name: "test"}, {id: 56, name: "test"}],
    [{id: 57, name: "test"}, {id: 58, name: "test"}, {id: 59, name: "test"}],
    [{id: 60, name: "test"}, {id: 61, name: "test"}, {id: 62, name: "test"}],
    [{id: 63, name: "test"}, {id: 64, name: "test"}, {id: 65, name: "test"}],
  ];
  const seats = Array.from({ length: 40 }, (_, i) => i + 1);
  
  return (
    <div className="stage-container">

      <div style={{height:"15px", backgroundColor: "#b023b3", width: "650px" }}></div>
      
      <div class="row-flex">
        <div style={{width: "300px", textAlign: "right"}}>
          {seatsLeft.map((seatrow, rowIndex) => (
            <div key={rowIndex}>
              {seatrow.map((seat) => (
                <Asientos key={seat.id} id={seat.id} />
              ))}
            </div>
          ))}
        </div>
        
        <div class="scenario-square"></div>

        <div style={{width: "300px", textAlign: "left"}}>
          {seatsRight.map((seatrow, rowIndex) => (
            <div key={rowIndex}>
              {seatrow.map((seat) => (
                <Asientos key={seat.id} id={seat.id} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div class="seatscenter4">
        {seats.map(seatId => (
            <Asientos key={seatId} id={seatId} />
        ))}
      </div>

    </div>
  );
}

const Escenario4 = () => {
  
  return (
    <Fragment>
      <Header />
      <div className="main-container">
        <div className="content-container">
          <div className="left-column" style={{display: "flex"}}>
            <Escenario/>
          </div>
          <div className="right-column">
            <Symbology/>
          </div>
        </div>
      </div>
      <button type="button" class="btn b-rigth"  style={{transform: 'translateY(20%)'}}>Continuar</button>
    </Fragment>
  );
}



export default Escenario4;