import { Fragment } from "react";
import Header from "../componentes/header";
import Escenario2 from "./Esceario2";
import Symbology from "../componentes/symbology";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";

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
                        <Symbology imgDis = {img1} imgNoDist = {img2} imgOcup = {img3}  />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AppScenary2;