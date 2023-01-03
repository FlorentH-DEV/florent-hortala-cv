import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import CardPersoListe from '../Lib/CardPersoListe'
import { connect } from 'react-redux'
import { toogleCardExperience, toogleCardCompetence, toogleCardDiplomeEtude, toogleCardLoisirPermis } from '../../Redux/Actions/ActionCard'
import cvPDF from '../../Document/PDF/CV_Florent HORTALA.pdf'
import './cv.css'
import { Link } from 'react-router-dom'

const Cv = (props) => {

    const {showCardExperience,
            showCardCompetence,
            showCardDiplomeEtude,
            showCardLoisirPermis} = props.configCard

    const calcAge = (date1, date2) => {  
        const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
        const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
        let day = 1000*60*60*24*365;
        return(parseInt((date2utc - date1utc)/day))
    }

    const informations = (
        <div className='row textGras paddingBotInformation'>
            <div className='col-lg-4 '>
                HORTALA Florent <br />
                2354 Avenue Claude Salles <br />
                12310 Bertholène <br />
                Né le 31 Décembre 1994 <br />
                {calcAge(new Date(process.env.REACT_APP_DATE_NAISSANCE), new Date())} ans
            </div>
            <div className='col-lg-4'></div>
            <div className='col-lg-4 '>
                <a className='colorTextSendMail' href='mailto:hortala.florent@hotmail.fr?subject=Prise de cibtact'>✉ hortala.florent@hotmail.fr</a> <br />
                <a className='colorTextSendMail' href="tel:+603002558">☎ +33 6 03 00 25 58</a> <br />
                <a className='colorTextSendMail' href={cvPDF} download="CV_Florent HORTALA.pdf"><i className="far fa-file-pdf"></i> Télécharger le CV</a>
                
            </div>
        </div>
    )

    const posteRechercher = (
        <div className='row paddingBotTitreRecherche'>
            <div className='col-lg-1'></div>
            <div className='col-lg-10 textGras text-center tailleText colorPosteRechercher'>
                {process.env.REACT_APP_RECHERCHE_1} <br />
                {process.env.REACT_APP_RECHERCHE_2}
            </div>
        </div>
    )

    const classArrowExperiences = (showCardExperience)? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'
    const experiences = (
        <Card className='cardParentPaddingBot'>
            <Card.Header className='text-center cardHeader' onClick={props.toogleCardExperience}>EXPERIENCES <i className={classArrowExperiences}></i></Card.Header>
            {
                (showCardExperience)?
                
                <Card.Body>
                    <Card className='cardChildPaddingBot'>
                        <Card.Header className='cardHeader'>En poste</Card.Header>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    INFORSUD TECHNOLOGIES <br />
                                    Causse Comtal, <br />
                                    12340 Bozouls
                                </div>
                                <div className='col-lg-9'>
                                    <strong><u>Ingénieur informatique</u></strong> <br />
                                    <u>Travaux effectués :</u><br />
                                    <ul>
                                        <li>IOT : Récupération des données de capteurs sur la Gateway Kunbus et envoie des données sur notre datacenter.</li>
                                        <li>Conception d’un applicatif pour le Crédit Agricole en C# avec le Framework .net</li>
                                        <li>Développement d'applicatifs en ReactJS, C#</li>
                                    </ul>
                                </div>
                            </div>                            
                        </Card.Body>
                    </Card>

                    <Card className='cardChildPaddingBot'>
                        <Card.Header className='cardHeader'>2017/2020</Card.Header>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    SPIE Bavilliers <br />
                                    2 rue de l'initiative, <br />
                                    90800 Bavilliers
                                </div>
                                <div className='col-lg-9'>
                                    <strong><u>Formation d'ingénieur en alternance</u></strong> <br />
                                    <u>Poste occupé :</u><br />
                                    <ul>
                                        <li> Gestion de projet informatique (conception d'un logiciel)</li>
                                        <li>Programmation d'un logiciel de génération de documentation automatisée en C++</li>
                                    </ul>
                                    <Link to='/book/progGenDoc'>Description du projet</Link>
                                </div>
                            </div>                            
                        </Card.Body>
                    </Card>

                    <Card className='cardChildPaddingBot'>
                        <Card.Header className='cardHeader'>05/2019</Card.Header>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    Scolaire <br/>

                                </div>
                                <div className='col-lg-9'>
                                    <strong><u>Projet de fin de parcours SMART OBJECT and CLOUD (IMERIR) :</u></strong> <br />
                                    "Food Truck connecté et application de réservation de commande avec gestion du stock en temps réel " <br />
                                    <Link to='/book/foodTruckConnect'>Description du projet</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='cardChildPaddingBot'>
                        <Card.Header className='cardHeader'>10/04/2019</Card.Header>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    Concour <br/>
                                </div>
                                <div className='col-lg-9'>
                                    <strong><u>Participation Akwaton au Sido à Lyon :</u></strong> <br />
                                    Création d'un module de contrôle de chute de pression avec supervision par dashboard
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className='cardChildPaddingBot'>
                        <Card.Header className='cardHeader'>2016</Card.Header>
                        <Card.Body>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    Scolaire <br/>
                                    Projet de fin d'année de BTS: <br />
                                </div>
                                <div className='col-lg-9'>
                                    <strong><u>Amélioration d'un pressoir à raisin à des fins d'analyses</u></strong> <br />
                                    
                                    <Link to='/book/presseViticole'>Description du projet</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Card.Body>

                :

                <Fragment></Fragment>
            }
        </Card>
    )

    const classArrowCompetences = (showCardCompetence)? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'
    const competences = (
        <Card className='cardParentPaddingBot'>
            <Card.Header className='text-center cardHeader' onClick={props.toogleCardCompetence}>COMPETENCES <i className={classArrowCompetences}></i></Card.Header>
            {
                (showCardCompetence)?
                    <Card.Body>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <CardPersoListe
                                    header={"Langages de programmation"}
                                    body={['C/C++/C#', 'Python', 'Swift', 'HTML/CSS /javaScript', 'ReactJS', 'SQL/PostgreSQL', 'Ladder/Grafcet/Sysml (Industriel)']}
                                />
                            </div>

                            <div className='col-lg-6'>
                                <CardPersoListe
                                    header={"Logiciels"}
                                    body={['QTCreator', 'Android Studio', 'XCode', 'Solidworks', 'Roboguide', 'TIA Portal', 'Ultimaker Cura']}
                                />
                            </div>

                            <div className='col-lg-6'>
                                <CardPersoListe
                                    header={"Notions"}
                                    body={['Traitement d’image avec OpenCv', 'Cloud, IMB Cloud, AWS Cloud, Héroku', 'Conteneurisation (Docker)', "Programmation d'une neurone", 'JSON/XML']}
                                />
                            </div>

                            <div className='col-lg-6'>
                                <CardPersoListe
                                    header={"Objets connectés"}
                                    body={['Communication LoRa', 'Gateway Kunbus', 'Programmation microcontrôleur (STM32)', 'Serveur MQTT (Mosquitto)', 'Service Web python et PHP']}
                                />
                            </div>
                        </div>
                    </Card.Body>

                    :

                    <Fragment></Fragment>
            }
            {
                (showCardCompetence)?
                    <Card.Footer>
                        <ul>
                            <li>Etude Pneumatique / Hydraulique</li>
                            <li>Etude Mécanique / Conception 3D</li>
                            <li>Etude Electrique / Câblage</li>
                            <br />
                            <li>(Management) Management en spirale pour de la Recherche et du développement</li>
                            <li>(Management) Initié à la méthode Scrum.</li>
                            <li>(Automatisme) Programmation d'un système de filtration d'une piscine.</li>
                            <li>(Automatisme) Programmation IHM activations et désactivations d'actionneurs temporisés</li>
                        </ul>
                    </Card.Footer>

                    :

                    <Fragment></Fragment>
            }
                    
                   
        </Card>
    )

    const classArrowEtude = (showCardDiplomeEtude)? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'
    const etude = (
        <Card className='cardParentPaddingBot'>
            <Card.Header className='text-center cardHeader' onClick={props.toogleCardDiplomeEtude}>DIPLOMES & ETUDES <i className={classArrowEtude}></i></Card.Header>
            {
                (showCardDiplomeEtude)?    
                    <Card.Body>
                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>2020</Card.Header>
                            <Card.Body className=''>
                                Manager de Projets en Informatique & Robotique option IOT (internet of think) *mention assez bien -  Ecole d’ingénieur IMERIR (Institut Méditerranéen d’Etude et de Recherche en Informatique et Robotique) - Avenue Paul Pascot - 66000 Perpignan.
                            </Card.Body>
                        </Card>

                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>2016</Card.Header>
                            <Card.Body className=''>
                                BTS Conception Réalisation de Système Automatique - Lycée Louis Rascol - 81100 ALBI
                            </Card.Body>
                        </Card>

                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>2014</Card.Header>
                            <Card.Body className=''>
                                BAC Science et Technique de l'ingénieur *mention assez bien - Lycée De la Salle - 81100 CASTRES
                            </Card.Body>
                        </Card>

                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>2012</Card.Header>
                            <Card.Body className=''>
                                BEP Système Électronique et Numérique - Lycée De la Salle - 81000 CASTRES
                            </Card.Body>
                        </Card>
                    </Card.Body>

                    :

                    <Fragment></Fragment>
            }
        </Card>
    )
    
    const classArrowLoisirPermis = (showCardLoisirPermis)? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'
    const loisirPermis = (
        <Card className=''>
            <Card.Header className='text-center cardHeader' onClick={props.toogleCardLoisirPermis}>LOISIRS & PERMIS <i className={classArrowLoisirPermis}></i></Card.Header>
            {
                (showCardLoisirPermis)?                
                    <Card.Body>
                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>LOISIRS</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>Réalisation de projets divers en robotique et informatique avec Arduino, Raspberry ou imprimante 3D</li>
                                    <li>Pêche lacs et rivières</li>
                                    <li>Ski nautique/Alpin</li>
                                </ul>
                            </Card.Body>
                        </Card>
                        
                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader'>PERMIS</Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>A1 Depuis 2011</li>
                                    <li>B Depuis 2013</li>
                                    <li>BE Depuis 2017</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Card.Body>

                :

                <Fragment></Fragment>    
            }
        </Card>
    )

    return (
        <Card>
            <Card.Header className='test'>
                {informations}
                {posteRechercher}
            </Card.Header>
            <Card.Body>
                {experiences}
                {competences}
                {etude}
                {loisirPermis}
            </Card.Body>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        configCard: state.ReducerActionCard
    }
}

export default connect(mapStateToProps, { toogleCardExperience, toogleCardCompetence, toogleCardDiplomeEtude, toogleCardLoisirPermis})(Cv)
