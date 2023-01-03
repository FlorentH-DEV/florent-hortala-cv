import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const SearchAndDeleteImg = () => {
    const liens = null
    const context = (
        <Fragment>
            J'avais besoin d'un logiciel qui soit capable de trouver toutes les images dans le dossier et sous-dossier souhaités. <br />
            Une fois les images trouvées je souhaitais pouvoir changer leur destination. Quand le processus de recherche et de déplacement étaient terminés, il me fallait
            pouvoir analyser si les images était identiques (au niveau pixel).
        </Fragment>
    )
    const fonctionnement = null
    const travaux = null
    const amelioration = null
    const competences = ["Programmation C++", "IDE: QTCreator"]

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

export default SearchAndDeleteImg
