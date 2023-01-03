import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const ProgrammeGenDoc = (props) => {
    const liens = null
    const context = (
        <Fragment>
            Au cours de mon alternance au sein du groupe SPIE, il m'a été demandé de concevoir un logiciel de génération de documentation pour les robots industriels. <br />
            L'objectif de ce logiciel était d'utiliser la sauvegarde des robots afin de générer leurs documentations de manière autonomatisée.
        </Fragment>
    )
    const fonctionnement = null
    const travaux = (
        <Fragment>
            Ce logiciel permet à l'utilisateur de cibler le dossier de sauvegarde du robot à l'aide d'une interface graphique. Une fois ciblé celui-ci va récupérer les informations nécessaires pour
            générer la documentation en format PDF. <br />
            Pour ce faire, il a fallu concevoir en collaboration avec les roboticiens, un standard de programmation (une manière universelle de programmer). <br />
            A l'aide de commentaires, de préfixes de noms (fichiers ou variables) et d'architecture de programme, les données souhaitées dans la documentation sont extraites.
        </Fragment>
    )
    const etapes = (
        <Fragment>
            Ce logiciel regroupe 3 fonctionnalités fondamentales : <br />
            <ul>
                <li>La recherche de données</li>
                <li>La transformation de ces données en document PDF</li>
                <li>L'interprétation de ces données afin de concevoir un document de trajectoire graphique</li>
            </ul>   
            Comme expliqué ci-dessus, la recherche de données s'effectue à partir du dossier ciblé par l'utilisateur. <br />
            Une fois le dossier de sauvegarde sélectionné, les données sont extraites et utilisées pour générer la documentation en PDF. <br />
            <br />
            La dernière partie consiste à interpréter ces données de manière graphique, et cela pour chaque code cycle (groupe d'action à mener). <br />
            Le nombre de code cycle par robot est différent en fonction des applications. C'est pourquoi le logiciel permet un gain de temps considérable pour le roboticien. 
        </Fragment>
    )

    const amelioration = null
    const competences = ["Langage C++ / IDE QT Creator", "Language Robot Fanuc", "Management de projet"]

    return (
        <Fragment>
            <DescriptionProjet1
                liens={liens}
                context= {context}
                fonctionnement={fonctionnement}
                travaux= {travaux}
                etapes= {etapes}
                amelioration={amelioration}
                competences= {competences}
            />
        </Fragment>
    )
}

export default ProgrammeGenDoc