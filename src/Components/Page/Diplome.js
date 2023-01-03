import React, { Fragment } from 'react'
import OneDiplome from './Diplome/OneDiplome'
// Import des diplômes
import imgDipManagerSystemeInformatiqueRobotique from '../../Images/Diplome/ManagerDeSystemetInformatiqueEtRobotique.png'
import imgDipSpecialiteIOT from '../../Images/Diplome/SpecialiteIOT.PNG'
import imgDipBTSCRSA from '../../Images/Diplome/BTS_CRSA.PNG'
import imgDipBACSTI2d from '../../Images/Diplome/BACSTI2D.PNG'
import imgDipBEPSEN from '../../Images/Diplome/BEP.PNG'
// Import des diplômes en PDF
import pdfDipManagerSystemeInformatiqueRobotique from '../../Images/Diplome/ManagerDeSystemetInformatiqueEtRobotique.pdf'
import pdfDipSpecialiteIOT from '../../Images/Diplome/SpecialiteIOT.pdf'
import pdfDipBTSCRSA from '../../Images/Diplome/BTS_CRSA.pdf'
import pdfDipBACSTI2D from '../../Images/Diplome/BACSTI2D.pdf'
import pdfDipBEPSEN from '../../Images/Diplome/BEP.pdf'
import { connect } from 'react-redux'
import {toogleCardManagerSystemeInfoRob, toogleCardSpecialiteIOT, toogleCardBTS, toogleCardBAC, toogleCardBEP} from '../../Redux/Actions/ActionCard.js'


const Diplome = (props) => {
    return (
        <Fragment>
            <OneDiplome
                title={"Manager de Système informatique et Robotique"}
                img={imgDipManagerSystemeInformatiqueRobotique}
                show={props.showCardManagerSysInfoRob}
                fct={() => props.toogleCardManagerSystemeInfoRob()}
                diplomePDF={pdfDipManagerSystemeInformatiqueRobotique}
            />

            <OneDiplome
                title={"Spécialité SMART OBJECT AND CLOUD"}
                img={imgDipSpecialiteIOT}
                show={props.showCardSpecialiteIOT}
                fct={() => props.toogleCardSpecialiteIOT()}
                diplomePDF={pdfDipSpecialiteIOT}
            />

            <OneDiplome
                title={"BTS CRSA (Conception et Réalisation de Systèmes Automatiques)"}
                img={imgDipBTSCRSA}
                show={props.showCardBTS}
                fct={() => props.toogleCardBTS()}
                diplomePDF={pdfDipBTSCRSA}
            />

            <OneDiplome
                title={"BAC STI 2D (SCIENCES ET TECHNOLOGIES DE L'INDUSTRIE ET DU DÉVELOPPEMENT DURABLE)"}
                img={imgDipBACSTI2d}
                show={props.showCardBAC}
                fct={() => props.toogleCardBAC()}
                diplomePDF={pdfDipBACSTI2D}
            />

            <OneDiplome
                title={"BEP SEN (Systèmes Electroniques et Numériques)"}
                img={imgDipBEPSEN}
                show={props.showCardBEP}
                fct={() => props.toogleCardBEP()}
                diplomePDF={pdfDipBEPSEN}
            />
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        showCardManagerSysInfoRob: state.ReducerActionCard.showCardManagerSysInfoRob,
        showCardSpecialiteIOT: state.ReducerActionCard.showCardSpecialiteIOT,
        showCardBTS: state.ReducerActionCard.showCardBTS,
        showCardBAC: state.ReducerActionCard.showCardBAC,
        showCardBEP: state.ReducerActionCard.showCardBEP
    }
}

export default connect(mapStateToProps, {toogleCardManagerSystemeInfoRob, toogleCardSpecialiteIOT, toogleCardBTS, toogleCardBAC, toogleCardBEP})(Diplome)
