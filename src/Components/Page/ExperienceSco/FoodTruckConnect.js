import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'

const FoodTruckConnect = () => {
    const liens = null
    const context = (
        <Fragment>
            Pour les Jeux Olympiques de 2024, il nous a été demandé de créer une application d'objets connectés pour une compagnie de food truck.<br />
            En ouvrant l'application Android/IOS le client devait pouvoir sélectionner ce qu'il souhaitait manger. Une fois ce choix effectué, l'application 
            cherchait les food trucks compatibles avec sa commande, ainsi que la disponibilité des produits suivant le temps de trajet du client. Cela permet de 
            dire à l'utilisateur vers quel food truck il va devoir aller, tout en lui assurant la disponibilité du stock.
        </Fragment>
    )
    const fonctionnement = (
        <Fragment>
            <u>HTML/CSS/javaScript :</u> Supervision du stock et des commandes du food truck <br />
            <u>Raspberry :</u> Stockée dans le food truck, elle permet le lancement du dashboard pour la supervision. <br />
            Système de lecteur de code barre intégré pour actualiser le stock.
        </Fragment>
    )
    const travaux = null
    const amelioration = null
    const competences = ["Web service python", "Base de données en Postgresql", "Serveur MQTT", "HTML/CSS/javaScript", "Raspberry", "Déploiement héroku (Base de données)", "Déploiement IBM (webService)", "Application Cordova", "Application Android"]

    
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

export default FoodTruckConnect









