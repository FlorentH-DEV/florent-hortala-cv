import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const PorteRFID = () => {
    const liens = null
    const context = (
        <Fragment>
            Le principe de ce projet était de restreindre l'accessibilité d'une zone à un badge ou carte RFID. <br />
            Cela permettait aussi de savoir quelle personne a eu accès à cette zone et à quel moment.
        </Fragment>
    )
    const fonctionnement = (
        <Fragment>
            Afin de pouvoir déverrouiller la porte, l'utilisateur a besoin de présenter sa carte ou badge RFID. Une fois présentée, le code RFID est comparé avec celui des utilisateurs recensés. <br />
            Pour une question de coût les informations sont stockées dans un fichier présent sur la carte SD. <br />
            Si la personne identifiée est un administrateur, la boîte contenant la carte SD se déverrouille afin qu'il puisse la récupérer et ajouter ou supprimer de nouveaux utilisateurs.
        </Fragment>
    )
    const travaux = null
    const amelioration = (
        <Fragment>
            L'axe principal d'amélioration que j'envisageai étais de connecter le système. Dès lors je pensais utiliser une carte Raspberry afin de créer une base de données locale. 
            Avec une application, l'utilisateur pourrais changer les informations sans avoir un accès physique.
        </Fragment>
    )
    const competences = ["Carte arduino nano", "Lecteur de badge RFID", "Lecteur de carte SD", "Afficheur LCD", "Module RTC (horloge temps réel)"]

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

export default PorteRFID
