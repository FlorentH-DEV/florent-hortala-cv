import React from 'react'
import CardPersoImg from '../Lib/CardPersoImg'

import imgProjetIndustriel from '../../Images/ExpSco/ProjetIndus3A.PNG' 
import imgSiteLaponie from '../../Images/ExpSco/SiteLaponie.PNG'
import imgFoodTruckConnecte from '../../Images/ExpSco/Projet foodtruck.jpg'
import imgPresseViticole  from '../../Images/ExpSco/PresseViticole.PNG'


const ExperienceSco = (props) => {
    return (
        <div className='row'>
            <div className='col-lg-6'>
                <CardPersoImg
                    header="Projet industriel 3ième années"
                    img={imgProjetIndustriel}
                    pathOpenPage="/expSco/projetIndus3annee"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="FoodTruck connecté"
                    img={imgFoodTruckConnecte}
                    pathOpenPage="/expSco/foodTruckConnect"
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImg
                    header="Presse viticole"
                    img={imgPresseViticole}
                    pathOpenPage="/expSco/presseViticole"
                />
            </div>

        </div>
    )
}

export default ExperienceSco
