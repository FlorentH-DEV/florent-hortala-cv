import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const AutomPiscine = (props) => {
    const liens = null
    const context = (
        <Fragment>
            Au cours de mon stage chez Eemau industrie, il m'a été confié la tâche de développer un programme IHM Siemens pour l'automatisation d'une piscine.
        </Fragment>
    )
    const fonctionnement = null
    const travaux = (
        <Fragment>
            J'ai dû créer plusieurs vues graphiques afin de donner la possibilité à l'utilisateur de gérer l'éclairage de sa piscine, 
            la gestion des différentes pompes (contre-courant, balnéo), les systèmes de filtration, le robot de nettoyage et la pompe à chaleur.
        </Fragment>
    )
    const amelioration = null
    const competences = ["Automatisme (IHM) Siemens"]

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

export default AutomPiscine
