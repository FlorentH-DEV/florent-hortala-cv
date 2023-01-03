import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const PresseViticole = () => {
    const liens = null
    const context = (
        <Fragment>
            Lors de ma dernière année de BTS CRSA (Conception Réalisation de Système Automatisé), nous avons dû améliorer un pressoir viticole conçu l'année précédente par nos camarades.<br />
            Ce pressoir viticole était destiné à un client oenologue. Celui-ci analysait la qualité du raisin avant la récolte.<br />
            Le mois précédant la vendange, des viticulteurs prélevaient des échantillons de raisin afin de faire des analyses. <br />
            Notre machine devait presser les grappes de raisin et les filtrer afin d'obtenir un jus propre sans pulpe.
        </Fragment>
    )
    const fonctionnement = (
        <Fragment>
            Pour extraire un jus de qualité suffisante, l'utilisateur du pressoir doit positionner les grappes de raisin dans la cuve. <br />
            Pour cette opération, la machine doit effectuer un cycle complet :
            <ol>
                <li>La pression exercée par le vérin doit-être controlée pendant le pressage du raisin. Une pression trop faible ne donnera pas assez de jus; 
                à l'inverse une pression trop importante produira un jus avec beaucoup de pulpe, et donc de mauvaise qualité.</li>
                <li>Lors de ce procédé, le jus est filtré, afin d'éviter tout résidu non désiré.</li>
                <li>Dès lors l'utilisateur peux récupérer le jus pour analyse.</li>
                <li>Pour éviter toute contamination d'une parcelle de raisin à l'autre, la machine lance un cycle de nettoyage complet après chaque cycle de pressage. 
                Ce cycle de nettoyage est nécessaire, autant pour éviter la contamination que pour les normes alimentaires à respecter.</li>
            </ol>
            Le nettoyage de la machine s'effectue à l'aide de 30 buses qui projettent de l'eau à 60 degrés.
        </Fragment>
    )
    const travaux = null
    const amelioration = null
    const competences = ["Automatisme (Siemens)", "Etudes mécaniques", "Modélisation 3D (Solidworks)", "Etudes pneumatiques", "Etudes hydrauliques", "Etudes électriques", "Câblage électrique", "Usinage", "Montage"]

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

export default PresseViticole
