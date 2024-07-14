import React, { useEffect } from 'react';
import './style.css';
import img from '../../img/stage.png';
import escenario1 from '../../img/escenario1.png';
import escenario2 from '../../img/escenario2.png';
import escenario3 from '../../img/escenario3.png';
import escenario4 from '../../img/escenario4.png';

const SeatMap = () => {
    useEffect(() => {
        const modal = document.getElementById('exampleModal');
        modal.addEventListener('show.bs.modal', () => {
            document.body.classList.add('modal-open');
        });
        modal.addEventListener('hide.bs.modal', () => {
            document.body.classList.remove('modal-open');
        });

        // Clean up event listeners on component unmount
        return () => {
            modal.removeEventListener('show.bs.modal', () => {
                document.body.classList.add('modal-open');
            });
            modal.removeEventListener('hide.bs.modal', () => {
                document.body.classList.remove('modal-open');
            });
        };
    }, []);

    return (
        <div className="seat-map-container">
            <div className="seat-map-content">
                <h2>Crea tu escenario</h2>
                <p>Selecciona uno de nuestros escenarios disponibles para tu evento.</p>
                <button className="create-map-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Crear un escenario</button>
            </div>
            <div className="seat-map-icon">
                <img src={img} alt="Mapa de asientos icono" />
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered custom-modal-dialog">
                    <div className="modal-content">
                        <div style={{ marginTop: '50px' }}></div>
                        {/* content 3 images */}
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">

                                    <div className="scenaryz-map-wrapper">
                                        {/* <div className="scenaryz-map-container" onClick={handleClick}> */}
                                        <div className="scenaryz-map-container">
                                            <div className="scenaryz-map">
                                                <img src={escenario1} alt="scenaryz Map" className="scenaryz-map-image"/>
                                            </div>
                                        </div>
                                        <p className="scenaryz-map-label">Escenario 1</p>
                                    </div>


                                </div>
                                <div class="col">

                                    <div className="scenaryz-map-wrapper">
                                        {/* <div className="scenaryz-map-container" onClick={handleClick}> */}
                                        <div className="scenaryz-map-container">
                                            <div className="scenaryz-map">
                                                <img src={escenario2} alt="scenaryz Map" className="scenaryz-map-image"/>
                                            </div>
                                        </div>
                                        <p className="scenaryz-map-label">Escenario 2</p>
                                    </div>

                                </div>
                                <div class="col">
                                    
                                <div className="scenaryz-map-wrapper">
                                        {/* <div className="scenaryz-map-container" onClick={handleClick}> */}
                                        <div className="scenaryz-map-container">
                                            <div className="scenaryz-map">
                                                <img src={escenario3} alt="scenaryz Map" className="scenaryz-map-image"/>
                                            </div>
                                        </div>
                                        <p className="scenaryz-map-label">Escenario 3</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* content 3 images */}
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                   
                                <div className="scenaryz-map-wrapper">
                                        {/* <div className="scenaryz-map-container" onClick={handleClick}> */}
                                        <div className="scenaryz-map-container">
                                            <div className="scenaryz-map">
                                                <img src={escenario4} alt="scenaryz Map" className="scenaryz-map-image"/>
                                            </div>
                                        </div>
                                        <p className="scenaryz-map-label">Escenario 4</p>
                                    </div>

                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                                <div class="col">
                                    One of three columns
                                </div>
                            </div>
                        </div>

                        <div style={{ marginTop: '50px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatMap;


