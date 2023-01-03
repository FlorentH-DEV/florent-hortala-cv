import React from 'react'
import Card from 'react-bootstrap/Card'

import imgAppCANMP from '../../Images/ExpPro/ApplicationCredit.jpg'
import imgGenDocumentation from '../../Images/ExpPro/GénDoc.png'
import imgPresseEmbout from '../../Images/ExpPro/presseEnbout.jpg'
import imgAutomPiscine from '../../Images/ExpPro/AutomPiscine.jpg'

import './experiencePro.css'
import CardPersoImg from '../Lib/CardPersoImg'

const ExperiencePro = (props) => {
    return (
        <div className='row'>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Programme de génération de documentation"
                    img={imgGenDocumentation}
                    pathOpenPage="/expPro/progGenDoc"
                />
            </div>
            
            <div className='col-lg-6'>
                <CardPersoImg
                    header="Automatisation du ligne de presse d'emboutissage"
                    img={imgPresseEmbout}
                    pathOpenPage="/expPro/automPressEmbout"
                />
            </div>
            
            <div className='col-lg-6'>
                <CardPersoImg
                    header="Automatisation d'une piscine"
                    img={imgAutomPiscine}
                    pathOpenPage="/expPro/automPiscine"
                />
            </div>
        </div>
    )
}

export default ExperiencePro
