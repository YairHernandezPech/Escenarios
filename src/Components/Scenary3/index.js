import React from 'react';
import "../../style.css";
import Asientos from '../Scenary1/Asientos1'
import Indice from '../layouts/indice/index'

const Escenario = () => {
  const seatsLeft = [
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
  ];
  const seatsRight = [
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
    [{id:1, name: "test"}, {id:1, name: "test"}, {id:1, name: "test"}],
  ];
  const seats = Array.from({ length: 30 }, (_, i) => i + 1);
  
  return (
    <div className="stage-container">

      <div style={{height:"15px", backgroundColor: "#575757", width: "620px" }}></div>
      
      <div class="row-flex">
        <div style={{width: "300px", textAlign: "right"}}>
          {seatsLeft.map((seatrow, rowIndex) => (
            <div style={{ marginRight: `${-14 * rowIndex}px` }} key={rowIndex}>
              {seatrow.map((seat) => (
                <Asientos key={seat.id} id={seat.id} />
              ))}
            </div>
          ))}
        </div>
        
        <div class="trapecio"></div>

        <div style={{width: "300px", textAlign: "left"}}>
          {seatsRight.map((seatrow, rowIndex) => (
            <div style={{ marginLeft: `${-14 * rowIndex}px` }} key={rowIndex}>
              {seatrow.map((seat) => (
                <Asientos key={seat.id} id={seat.id} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div class="seatscenter">
        {seats.map(seatId => (
            <Asientos key={seatId} id={seatId} />
        ))}
      </div>

    </div>
  );
}

const Escenario3 = () => {
  
  return (
    <div style={{display: 'flex', marginTop: '100px', justifyContent:"center", padding: "30px"}} >
      <Escenario/>
      <Indice
        availableImage={"http://localhost:3000/scenaries/scenary3/scenary3.png"}
        unavailableImage={"http://localhost:3000/scenaries/scenary3/scenary3.png"}
        occupiedImage={"http://localhost:3000/scenaries/scenary3/scenary3.png"}
      />
    </div>
  );
}



export default Escenario3;