import React, { Fragment } from 'react'
import DescriptionProjet1 from '../../Lib/DescriptionProjet1'
import imgCatamaran_1 from '../../../Images/ExpPerso/CatamaranHydroAmor/CatamaranHydroAmor_1.jpg'
import imgCatamaran_2 from '../../../Images/ExpPerso/CatamaranHydroAmor/CatamaranHydroAmor_2.jpg'
import './CatamaranHydroAmor.css'

const CatamaranHydroAmor = () => {
  const video = (
    <Fragment>
      <div className="video-responsive">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/Dm1PGwYfW5s`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Catamaran hydroglisseur"
        />
      </div>
    </Fragment>
  )
  const liens = null
  const context = (
    <Fragment>
      Je souhaitais concevoir un bateau amorceur afin de faciliter mes sessions de pêche. Il permet aussi 
      d'amener les lignes sur zone directement du bord, si le lancé est impossible ou trop compliqué. <br />
      Ce projet a aussi été motivé par mon envie de défi. En effet, je n'avais aucune idée de la complexité technique à 
      laquelle j'ai dû faire face.
    </Fragment>
  )
  const fonctionnement = (
    <Fragment>
      Ce bateau fonctionne selon le principe d'un hydroglisseur, il se déplace à l'aide d'une hélice se trouvant à l'arrière de celui-ci. <br />
      J'ai choisi ce principe afin de faciliter la navigation sur des cours d'eau encombrés. Une fois le bateau arrivé à sa destination, 
      nous pouvons amorcer et/ou déposer la ligne. <br />
      L'amorçage ce fait à partir d'un éjecteur rotatif, le but étant de diffuser l'amorce sur un diamètre. Cela 
      complexifie le système mais améliore l'amorçage.
    </Fragment>
  )
  const travaux = null
  const amelioration = (
    <Fragment>
      Après plusieurs utilisations, je n'étais pas satisfait du rayon d'amorçage. Le moteur de l'éjecteur n'avait pas la puissance 
      nécessaire pour une éjection optimale.
      J'ai donc choisi de re-designer ce catamaran et de faire une version 2. <br />
      Sur cette version, j'ai fait le choix de supprimer l'éjecteur rotatif, afin de positionner trois déversoirs. Bien que la qualité d'amorçage soit réduite, 
      la quantité augmente.
      Ce choix à été motivé par une raison de coût, trop important pour le moteur rotatif. <br />
      Afin de trouver un gain de vitesse, j'ai dessiné de nouvelles extensions amovibles sur les flotteurs. Cela facilite la prénétration dans l'eau. <br />
      Pour le design de cette nouvelle version, j'ai voulu améliorer deux concepts primordiaux. <br />
      Comme dit précédemment, les nouveaux déversoir permettent d'embarquer beaucoup plus d'amorce, (approximativement 5 kilos au maximum). 
      Cependant le design a aussi été motivé par un besoin de propreté ainsi que le rangement des câbles et des divers éléments électroniques. <br />
      Vous pourrez trouver ci-dessous le nouveau modèle de ce catamaran. <br /><br />
      <div className='row'>
        <div className='col-lg-1'></div>
        <div className='col-lg-4 redimImage'><img className='' src={imgCatamaran_1} alt='imgGenDocumentation'></img></div>
        <div className='col-lg-2'></div>
        <div className='col-lg-4 redimImage'><img className='' src={imgCatamaran_2} alt='imgGenDocumentation'></img></div>
        <div className='col-lg-1'></div>
      </div>
    </Fragment>
  )
  const materiauxUtiliser = (
    <Fragment>
      <ul>
        <li>Transmetteur / Récepteur 2.4GHz</li>
        <li>moteurs de drone brushless</li>
        <li>servo-moteurs</li>
        <li>Batterie Lipo 25C 3S</li>
        <li>Variateur 30A</li>
      </ul>
      J'ai conçu les pièces restantes avec mon imprimante 3D
    </Fragment>
  )
  const etudeMener = (
    <Fragment>
      <ul>
        <li>Une première étude sur la surface d'air nécessaire à la bonne flottaison, avec le principe d'Archimède</li>
        <li>Une seconde étude mécanique sur la dimension de l'hélice, afin de calculer la force de poussée</li>
        <li>Une troisième étude de conception complète, afin de concevoir toutes les différentes pièces qui composent le projet</li>
      </ul>
      Une étude sur le choix matériel a aussi été nécessaire pour l'achat des différents composants électroniques.
    </Fragment>
  )
  const competences = ["Etude mécanique", "Etude électrique", "Conception 3D"]

  return (
      <Fragment>
          <DescriptionProjet1
              video={video}
              liens={liens}
              context= {context}
              fonctionnement={fonctionnement}
              travaux= {travaux}
              amelioration={amelioration}
              materiauxUtiliser={materiauxUtiliser}
              etudeMener={etudeMener}
              competences= {competences}
          />
      </Fragment>
  )
}

export default CatamaranHydroAmor