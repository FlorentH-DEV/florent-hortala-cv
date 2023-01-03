import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const ProjetIndus3Annee = () => {
    const liens = null
    const context = (
        <Fragment>
            Lors de notre dernière année au sein de l'école d'IMERIR, un camarade et moi-même avons dû réaliser un projet industriel durant 2 mois. Celui-ci avait pour but de nous mettre dans les conditions réelles de gestion. <br />
            Notre client avait besoin de faire l'étude d'un îlot robotisé, permettant de palettiser des briques en terre crue en sortie de presse. <br />
            Pour communiquer, nous le contactions directement, comme au sein d'une véritable entreprise.
        </Fragment>
    )
    const fonctionnement = null
    const travaux = (
        <Fragment>
            <u>Le projet a été réalisé en plusieurs étapes :</u>
            <ul>
                <li>Réalisation du chaier des charges</li>
                <li>
                    Etudes : étude mécanique, étude de robotique, dimensionnement, placement du matériel dans la cellule et le type de cartérisation utilisé.
                </li>
                <li>Une fois les données en notre possession, nous avons commencé le chiffrage du projet.</li>
            </ul>
            Entre chaque étape, une réunion avec le client était requise afin de valider le travail effectué. <br />
            Suite au contexte sanitaire, ce projet a dû être arrêté.
        </Fragment>
    )
    const amelioration = null
    const competences = ["Gestion de projet", "Management (Scrum)", "Conception 3D (Solidworks)", "Programmation hors ligne (ABB)", "Commercial" ]

    return (
        <Fragment>
            <DescriptionProjet1
                liens={liens}
                context= {context}
                fonctionnement={fonctionnement}
                travaux= {travaux}
                amelioration={amelioration}
                competences= {competences}
            />
        </Fragment>
    )
}

export default ProjetIndus3Annee
