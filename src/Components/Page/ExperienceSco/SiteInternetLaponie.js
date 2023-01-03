import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const SiteInternetLaponie = () => {
    const liens = (
        <Fragment><a className='templateLien' href='https://lapland-assignement.herokuapp.com/'>Lien vers le site intenet</a><br /><br /></Fragment>
    )
    const context = (
        <Fragment>
            Durant mon Erasmus en Laponie, il m'a été demandé lors de mes deux projets finaux de créer un site web présentant la Laponie.<br />
            Le premier site web devait donner des informations générales sur la Laponie et afficher des guides que l'on pouvait générer aléatoirement. <br />
            Le second site web était axé sur l'interaction de notre premier site web avec une base de données, pour cela j'ai du refaire entièrement le site en PHP, l'objectif de ce dernier était de présenter la Laponie, nous devions donc avoir un site accessible à tout le monde, en plus de cela les guides ou les administrateurs pouvaient se connecter afin d'avoir accès à plus de fonctionnalités, par exemple les administrateurs pouvaient rajouter des groupes de guides, modifier les informations, rajouter des langues etc.
        </Fragment>
    )
    const fonctionnement = null
    const travaux = null
    const amelioration = null
    const competences = ["HTML/CSS/Java Script", "PHP", "SQL", "Déploiement héroku"]

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

export default SiteInternetLaponie