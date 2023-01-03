import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const CvEnLigne = () => {
    const liens = null
    const context = "Je voulais réunir dans un même endroit, mes compétences et mes expériences (professionnelles, scolaires et personnelles). Le but principal de ce CV en ligne, est de me présenter et de vous montrer ma motivation à travers tous mes projets personnels."
    const fonctionnement = null
    const travaux = null
    const amelioration = null
    const competences = ["React JS", "HTML/CSS/Java Script", "Déploiement héroku"]

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

export default CvEnLigne
