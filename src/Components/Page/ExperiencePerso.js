import React from 'react'
import CardPersoImg from '../Lib/CardPersoImg'

import imgCv from '../../Images/ExpPerso/CV.jpg'
import imgCatamaranHydroArmorceur from '../../Images/ExpPerso/CatamaranHydroAmor.jpg'
import imgSupervionTemperature from '../../Images/ExpPerso/supervision temp.png'
import imgRechercheImage from '../../Images/ExpPerso/recherche image.jpg'
import imgPorteElectroniqueRFID from '../../Images/ExpPerso/Serrure RFID.jpg'
import imgImpression3D from '../../Images/ExpPerso/Impression3DImageType.jpeg'




const ExperiencePerso = (props) => {
    return (
        <div className='row'>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Catamaran hydroglisseur"
                    img={imgCatamaranHydroArmorceur}
                    pathOpenPage="/expPerso/CataAmor"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Supervision de température (en cours)"
                    img={imgSupervionTemperature}
                    pathOpenPage="/expPerso/supVisionTemp"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Recherche & Suppression d'image"
                    img={imgRechercheImage}
                    pathOpenPage="/expPerso/searchAndDeleteImg"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Porte électronique gestion RFID"
                    img={imgPorteElectroniqueRFID}
                    pathOpenPage="/expPerso/porteRFID"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Impression 3D"
                    img={imgImpression3D}
                    pathOpenPage="/expPerso/impression3D"
                />
            </div>

        </div>
    )
}

export default ExperiencePerso
