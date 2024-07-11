import { Fragment } from "react";
import Header from "../componentes/header";
import Escenario2 from "./Esceario2";
import Symbology from "../componentes/symbology";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";

const AppScenary2 = () => {
    return (
        <Fragment>
            <Header />
            <div className="main-container">
                <div className="content-container">
                    <div className="left-column">
                        <Escenario2 />
                    </div>
                    <div className="right-column">
                        <Symbology imgDis = {img4} imgNoDist = {img5} imgOcup = {img6}  />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppScenary2;