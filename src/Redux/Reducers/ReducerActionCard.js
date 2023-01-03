import { actionListe } from '../Actions/TypeActions'

export default (
    state = {
        //Cv
        showCardExperience: true,
        showCardCompetence: false,
        showCardDiplomeEtude: false,
        showCardLoisirPermis: false,
        // Diplome
        showCardManagerSysInfoRob: false,
        showCardSpecialiteIOT: false,
        showCardBTS: false,
        showCardBAC: false,
        showCardBEP: false
    },
    action
) => {
    switch (action.type){           
        // Cv     
        case actionListe.TOOGLE_CARD_EXPERIENCE:
            return {
                ...state,
                showCardExperience: !state.showCardExperience
            }  
        
        case actionListe.TOOGLE_CARD_COMPETENCE:
            return {
                ...state,
                showCardCompetence: !state.showCardCompetence
            }

        case actionListe.TOOGLE_CARD_DIPLOME_ETUDE:
            return {
                ...state,
                showCardDiplomeEtude: !state.showCardDiplomeEtude
            }

        case actionListe.TOOGLE_CARD_LOISIR_PERMIS:
            return {
                ...state,
                showCardLoisirPermis: !state.showCardLoisirPermis
            }  
        
        // Diplome
        case actionListe.TOOGLE_CARD_MANAGER_SYST_INFO_ROB:
            return {
                ...state,
                showCardManagerSysInfoRob: !state.showCardManagerSysInfoRob
            } 
        case actionListe.TOOGLE_CARD_SPECIALITE_IOT:
            return {
                ...state,
                showCardSpecialiteIOT: !state.showCardSpecialiteIOT
            } 
        case actionListe.TOOGLE_CARD_BTS:
            return {
                ...state,
                showCardBTS: !state.showCardBTS
            } 
        case actionListe.TOOGLE_CARD_BAC:
            return {
                ...state,
                showCardBAC: !state.showCardBAC
            } 
        case actionListe.TOOGLE_CARD_BEP:
            return {
                ...state,
                showCardBEP: !state.showCardBEP
            } 
        
        

        default:
            return state
    }
}