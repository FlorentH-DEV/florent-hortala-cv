import React, { Fragment } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import './headerSrub.css'

const HeaderSrub = (props) => {
    let title = ''
    let buttons = <Fragment></Fragment>
    let caseDefault = false
    let history = useHistory();
    const btnRetour = <Fragment><button className='btn btn-info' onClick={() => {history.goBack()}}>Retour</button></Fragment>

    switch(useHistory().location.pathname){
        case '/book':
            title = 'Book'
            break
        case '/book/progGenDoc':
            title = 'Programme de génération de documentation' 
            buttons = <Fragment>{btnRetour}</Fragment>
            break   
        case '/book/automPressEmbout':
            title = "Automatisation d'une ligne de presses d'emboutissage"
            buttons = <Fragment>{btnRetour}</Fragment>
            break 
        case '/book/automPiscine':
            title = "Automatisation d'une piscine"
            buttons = <Fragment>{btnRetour}</Fragment>
            break 
        case '/book/CataAmor' :
            title = "Catamaran hydroglisseur"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/supVisionTemp' :
            title = "Supervision de température"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/searchAndDeleteImg' :
            title = "Recherche et supression d'images"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/porteRFID' :
            title = "Porte électronique RFID"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/impression3D' :
            title = "Conception et Impression de systèmes 3D"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/projetIndus3annee':
            title = "Projet Industriel de 3eme année"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/siteIntenetLaponie':
            title = "Site internet présentation Laponie"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/foodTruckConnect':
            title = "FoodTruck connecté"
            buttons = <Fragment>{btnRetour}</Fragment>
            break
        case '/book/presseViticole':
            title = "Presse viticole"
            buttons = <Fragment>{btnRetour}</Fragment>
            break

        case '/diplome':
            title = "Diplômes"
            break

        default:
            caseDefault = true
            title = 'non définie'
    }

    const header = (
        (!caseDefault)?
            <div className='row'>
                <div className='col-lg-2'></div>
                <div className='col-lg-8 title'>{title}</div>
                <div className='col-lg-2 text-center'>{buttons}</div>
            </div>
        :
            <Fragment></Fragment>
    )

    return (
        <div>
            {header}
        </div>
    )
}

export default HeaderSrub
