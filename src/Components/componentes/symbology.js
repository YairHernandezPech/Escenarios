import React from 'react';
import "../../style.css";
const Symbology = ({imgDis,imgNoDist,imgOcup}) => {
    return ( 
        <div className="custom-container">
        <div className="row mb-3 align-items-center">
            <div className="col-3 icon">
                <img src={imgDis} alt="Asiento No disponible" />
            </div>
            <div className="col-9 d-flex align-items-center text-margin-left">
                <div className="color-box diss"></div>
                <span>Asiento Disponible</span>
            </div>
        </div>
        <div className="divider"></div>
        <div className="row mb-3 align-items-center">
            <div className="col-3 icon">
                <img src={imgNoDist} alt="Asiento Disponible" />
            </div>
            <div className="col-9 d-flex align-items-center text-margin-left">
                <div className="color-box diisnot"></div>
                <span>Asiento No Disponible</span>
            </div>
        </div>
        <div className="divider"></div>
        <div className="row align-items-center">
            <div className="col-3 icon">
                <img src={imgOcup} alt="Asiento Ocupado" />
            </div>
            <div className="col-9 d-flex align-items-center text-margin-left">
                <div className="color-box ocup fa-regular fa-user"></div>
                <span>Asiento Ocupado</span>
            </div>
        </div>
    </div>
     );
}
 
export default Symbology;