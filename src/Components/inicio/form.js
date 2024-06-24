import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, FormSelect } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
    const navigation = useNavigate();

    const OptionSelecgt = (event) => {
        const value = event.target.value;
        switch (value) {
            case '1':
                navigation('/escenario1');
                break;
            case '2':
                navigation('/escenario2');
                break;
            case '3':
                navigation('/escenario3');
                break;
            case '4':
                navigation('/escenario4');
                break;
            default:
                break;
        }
    };

    return (
        <Container style={{ marginTop: '250px' }}>
            <div className="container text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <FormSelect className='form-select" aria-label="Disabled select example' onChange={OptionSelecgt} >
                            <option selected>Open this select menu</option>
                            <option value="1">Escenario 1</option>
                            <option value="2">Escenario 2</option>
                            <option value="3">Escenario 3</option>
                            <option value="4">Escenario 4</option>
                        </FormSelect>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Formulario;