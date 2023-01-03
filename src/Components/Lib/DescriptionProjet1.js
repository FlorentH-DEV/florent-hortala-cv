import React, { Fragment } from 'react'
import './DescriptionProjet1.css'

const DescriptionProjet1 = (props) => {
    
    return (
        <Fragment>
            { /* Lien */ }
            {
                (props.liens != null)?
                    <Fragment>
                        {props.liens}
                    </Fragment>
                :
                    <Fragment></Fragment>
            }

            { /* Vidéo */}
            {
                (props.video != null)?
                    <Fragment>{props.video} <br/ ></Fragment>
                :
                    <Fragment></Fragment>
            }

            { /* Context */ }
            {
                (props.context != null)?
                    <Fragment><strong><u>Contexte</u> :</strong><br /></Fragment>
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.context}</div>

            { /* Fonctionnement */ }
            {
                (props.fonctionnement != null)?
                    <Fragment><br /><br /><strong><u>Fonctionnement</u> :</strong><br /></Fragment>
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.fonctionnement}</div>

            { /* Travaux effectués */ }
            {
                (props.travaux != null)?
                    <Fragment><br /><br /><strong><u>Travaux effectués</u> :</strong><br /></Fragment>
                    
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.travaux}</div>

            { /* Etapes */ }
            {
                (props.etapes != null)?
                    <Fragment><br /><br /><strong><u>Etapes du projet</u> :</strong><br /></Fragment>
                    
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.etapes}</div>

            { /* Amélioration */ }
            {
                (props.amelioration != null)?
                    <Fragment><br /><br /><strong><u>Amélioration</u> :</strong><br /></Fragment>
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.amelioration}</div>

            { /* Matériaux utilisés */}
            {
                (props.materiauxUtiliser != null)?
                    <Fragment><br /><br /><strong><u>Matériaux utilisés</u> :</strong><br /></Fragment>
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.materiauxUtiliser}</div>

            {/* Etudes menées */}
            {
                (props.etudeMener != null)?
                    <Fragment><br /><br /><strong><u>Etudes menées</u> :</strong><br /></Fragment>
                :
                    <Fragment></Fragment>
            }
            <div className='justifier'>{props.etudeMener}</div>

            { /* Compétences utilisées */ }
            <br /><br /><strong><u>Compétences utilisées</u> :</strong><br /> 
            <ul>
                {
                    props.competences.map((competence, index) => (
                        <li key={index}>{competence}</li>
                    ))
                }
            </ul>
        </Fragment>
    )
}

export default DescriptionProjet1
