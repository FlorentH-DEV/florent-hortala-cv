import React from 'react';
import Book from '../Components/Page/Book';
import Cv from '../Components/Page/Cv';
import Diplome from '../Components/Page/Diplome';
import CatamaranHydroAmor from '../Components/Page/ExperiencePerso/CatamaranHydroAmor';
import Impression3D from '../Components/Page/ExperiencePerso/Impression3D';
import PorteRFID from '../Components/Page/ExperiencePerso/PorteRFID';
import SearchAndDeleteImg from '../Components/Page/ExperiencePerso/SearchAndDeleteImg';
import SupVisionTemp from '../Components/Page/ExperiencePerso/SupVisionTemp';
import AutomPiscine from '../Components/Page/ExperiencePro/AutomPiscine';
import AutomPressEmbout from '../Components/Page/ExperiencePro/AutomPressEmbout';
import ProgrammeGenDoc from '../Components/Page/ExperiencePro/ProgrammeGenDoc';
import FoodTruckConnect from '../Components/Page/ExperienceSco/FoodTruckConnect';
import PresseViticole from '../Components/Page/ExperienceSco/PresseViticole';
import ProjetIndus3Annee from '../Components/Page/ExperienceSco/ProjetIndus3Annee';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Cv',
    component: () =>  <Cv/>
  },
  {
    path: '/cv',
    exact: true,
    title: 'Cv',
    component: () => <Cv/>
  },
  {
    path: '/book',
    exact: true,
    title: 'Book',
    component: () => <Book/>
  },
  {
    path: '/book/progGenDoc',
    exact: true,
    title: 'Programme génération de documentation',
    component: () => <ProgrammeGenDoc/>
  },
  {
    path: '/book/automPressEmbout',
    exact: true,
    title: "Automatisation d'une ligne de presse d'emboutissage",
    component: () => <AutomPressEmbout/>
  },
  {
    path: '/book/automPiscine',
    exact: true,
    title: "Automatisation d'une Piscine",
    component: () => <AutomPiscine/>
  },
  {
    path: '/book/CataAmor',
    exact: true,
    title: 'Catamaran hydroglisseur amorceur',
    component: () => <CatamaranHydroAmor/>
  },
  {
    path: '/book/supVisionTemp',
    exact: true,
    title: 'Experiences Personnelle',
    component: () => <SupVisionTemp/>
  },
  {
    path: '/book/searchAndDeleteImg',
    exact: true,
    title: 'Experiences Personnelle',
    component: () => <SearchAndDeleteImg/>
  },
  {
    path: '/book/porteRFID',
    exact: true,
    title: 'Experiences Personnelle',
    component: () => <PorteRFID/>
  },
  {
    path: '/book/impression3D',
    exact: true,
    title: 'Experiences Personnelle',
    component: () => <Impression3D/>
  },
  {
    path: '/book/projetIndus3annee',
    exact: true,
    title: 'Experiences Scolaire',
    component: () => <ProjetIndus3Annee/>
  },
  {
    path: '/book/foodTruckConnect',
    exact: true,
    title: 'Experiences Scolaire',
    component: () => <FoodTruckConnect/>
  },
  {
    path: '/book/presseViticole',
    exact: true,
    title: 'Experiences Scolaire',
    component: () => <PresseViticole/>
  },
  {
    path: '/diplome',
    exact: true,
    title: 'Diplome',
    component: () => <Diplome/>
  }
];


export default routes;