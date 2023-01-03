import React, { Fragment, useState } from 'react'
import CardPersoImg from '../Lib/CardPersoImg'

import imgCatamaranHydroArmorceur from '../../Images/ExpPerso/CatamaranHydroAmor.jpg'
import imgSupervionTemperature from '../../Images/ExpPerso/supervision temp.png'
import imgRechercheImage from '../../Images/ExpPerso/recherche image.jpg'
import imgPorteElectroniqueRFID from '../../Images/ExpPerso/Serrure RFID.jpg'
import imgImpression3D from '../../Images/ExpPerso/Impression3DImageType.jpeg'
import imgProjetIndustriel from '../../Images/ExpSco/ProjetIndus3A.PNG' 
import imgFoodTruckConnecte from '../../Images/ExpSco/Projet foodtruck.jpg'
import imgPresseViticole  from '../../Images/ExpSco/PresseViticole.PNG'
import imgGenDocumentation from '../../Images/ExpPro/GénDoc.png'
import imgPresseEmbout from '../../Images/ExpPro/presseEnbout.jpg'
import imgAutomPiscine from '../../Images/ExpPro/AutomPiscine.jpg'

import { setSearchFiltre } from '../../Redux/Actions/ActionAutre'

import './book.css'
import { connect } from 'react-redux'

const Book = (props) => {

    const clickSearch = (value) => {
        if(value == 'all'){
            props.setSearchFiltre('')
        }
        else{
            props.setSearchFiltre(value)
        }
    }

    const projets = [
        {
            header: "Catamaran hydroglisseur",
            img: imgCatamaranHydroArmorceur,
            pathOpenPage: "/book/CataAmor",
            filtre: ['Concep']
        },
        {
            header: "Projet industriel 3ème année",
            img: imgProjetIndustriel,
            pathOpenPage: "/book/projetIndus3annee",
            filtre: ['Autom']
        },
        {
            header: "Presse viticole",
            img: imgPresseViticole,
            pathOpenPage: "/book/presseViticole",
            filtre: ['Autom']
        },
        {
            header: "FoodTruck connecté",
            img: imgFoodTruckConnecte,
            pathOpenPage: "/book/foodTruckConnect",
            filtre: ['IOT']
        },
        {
            header: "Programme de génération de documentation",
            img: imgGenDocumentation,
            pathOpenPage: "/book/progGenDoc",
            filtre: ['Dev']
        },
        { 
            header: "Automatisation du ligne de presse d'emboutissage",
            img: imgPresseEmbout,
            pathOpenPage: "/book/automPressEmbout",
            filtre: ['Autom']
        },
        {
            header: "Automatisation d'une piscine",
            img: imgAutomPiscine,
            pathOpenPage: "/book/automPiscine",
            filtre: ['Autom']
        },
        {
            header: "Supervision de température (en cours)",
            img: imgSupervionTemperature,
            pathOpenPage: "/book/supVisionTemp",
            filtre: ['IOT']
        },
        {
            header: "Recherche & Suppression d'image",
            img: imgRechercheImage,
            pathOpenPage: "/book/searchAndDeleteImg",
            filtre: ['Dev']
        },
        {
            header: "Porte électronique gestion RFID",
            img: imgPorteElectroniqueRFID,
            pathOpenPage: "/book/porteRFID",
            filtre: ['Concep', 'IOT']
        },
        {
            header: "Impression 3D",
            img: imgImpression3D,
            pathOpenPage: "/book/impression3D",
            filtre: ['Concep']
        } 
    ]

    let book = <Fragment></Fragment>
    const {valueFiltre} = props

    if(valueFiltre != ''){
        book = projets.map((projet) => (
            projet.filtre.map(filtre => (   
                         
                (filtre == valueFiltre)?
                    <div className='col-lg-6'>
                        <CardPersoImg
                            header={projet.header}
                            img={projet.img}
                            pathOpenPage={projet.pathOpenPage}
                            filter={projet.filtre}
                        />
                    </div>
                : 
                    <Fragment></Fragment>
                        
            ))
        ))
    } 
    else{
        book = (
            projets.map((projet, key) => (
                <div className='col-lg-6'>
                    <CardPersoImg
                        key={key}
                        header={projet.header}
                        img={projet.img}
                        pathOpenPage={projet.pathOpenPage}
                        filter={projet.filtre}
                    />
                </div>
            ))
        )
    }

    return (
        <Fragment>
            <div className='row borderFiltre'>
                <div className='col-lg-1'></div>
                {console.log(valueFiltre)}
                <div className= {'col-lg-2 text-center' + ((valueFiltre == '') ? ' option-selected' : '')}><a onClick={() => clickSearch('all')}>Tous</a></div>
                <div className= {'col-lg-1 text-center' + ((valueFiltre == 'IOT') ? ' option-selected' : '') }><a onClick={() => clickSearch('IOT')}>IOT</a></div>
                <div className= {'col-lg-2 text-center' + ((valueFiltre == 'Dev') ? ' option-selected' : '') }><a onClick={() => clickSearch('Dev')}>Développement</a></div>
                <div className= {'col-lg-3 text-center' + ((valueFiltre == 'Autom') ? ' option-selected' : '') }><a onClick={() => clickSearch('Autom')}>Automatisme / robotique</a></div>
                <div className= {'col-lg-2 text-center' + ((valueFiltre == 'Concep') ? ' option-selected' : '') }><a onClick={() => clickSearch('Concep')}>Conception</a></div>
                <div className='col-lg-1'></div>               
            </div>
            <div className='row paddingFiltre'>
                {book}
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        valueFiltre: state.ReducerAutre.valueFiltre
    }
}

export default connect(mapStateToProps, {setSearchFiltre})(Book)