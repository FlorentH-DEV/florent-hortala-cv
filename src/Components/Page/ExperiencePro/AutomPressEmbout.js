import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const AutomPressEmbout = () => {
    const liens = null
    const context = (
        <Fragment>
            Au cours de mon alternance au sein du groupe SPIE, j'ai participé au projet d'automatisation de 4 presses d'emboutissage pour Renault. <br />
            Nous avons dû changer les automates et re-développer tous les programmes pour les nouveaux automates.
        </Fragment>
    )
    const fonctionnement = null
    const travaux = (   
        <Fragment>
            Nous avons dû reprendre les anciens programmes automates et les refaire afin de les rendre compatibles avec les nouveaux. <br />      
            Afin de préparer les tests des programmes sur site, j'ai effectué les tests d'entrées sorties des 4 presses d'emboutissage. 
        </Fragment>
    )
    const amelioration = null
    const competences = ["Automatisme (programme/IHM)", "Câblage électrique"]


    return (
        <Fragment>
            <DescriptionProjet1
                liens={liens}
                context={context}
                fonctionnement={fonctionnement}
                travaux={travaux}
                amelioration={amelioration}
                competences={competences}
            />
        </Fragment>
    )
}

export default AutomPressEmbout
