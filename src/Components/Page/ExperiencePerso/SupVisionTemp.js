import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const SupVisionTemp = () => {
    const liens = null
    const context = (
        <Fragment>
            Le principe de ce projet était de faire des relevés de température chaque n minutes puis de faire remonter ces informations sur un matériel de supervision.
        </Fragment>
    )
    const fonctionnement = (
        <Fragment>
            Des capteurs de température sont positionnés à plusieurs endroits dans la maison. Ils remontent ensuite des données dans la base de données via l'API. <br />
            Sur l'écran de supervision les informations au sujet des températures de chaque zone sont présentes. <br />
            Afin d'accéder à leurs informations, les utilisateurs doivent se connecter avec leur mot de passe et leur identifiant. 
        </Fragment>
    )
    const travaux = null
    const amelioration = null
    const competences = ["Base de données postgresql", "API python", "Supervision html/css/java script", "Programmation langage C pour arduino", "Si gros projet serveur MQTT", "Déploiement héroku (WebService / Base de données)"]

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

export default SupVisionTemp
