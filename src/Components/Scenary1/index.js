import { Fragment } from "react";
import Header from "../Scenary1/header";
import Escenario1 from "./Escenario1";
import Symbology from "./symbology";

const AppScenary1 = () => {
    return (
        <Fragment>
            <Header />
            <div className="main-container">
                <div className="content-container">
                    <div className="left-column">
                        <Escenario1 />
                    </div>
                    <div className="right-column">
                        <Symbology />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppScenary1;