import {actionListe} from './TypeActions'

/* CV */
export const toogleCardExperience = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_EXPERIENCE,   
        })
    }
}
export const toogleCardCompetence = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_COMPETENCE,   
        })
    }
}
export const toogleCardDiplomeEtude = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_DIPLOME_ETUDE,   
        })
    }
}
export const toogleCardLoisirPermis = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_LOISIR_PERMIS,   
        })
    }
}

/* Diplome */
export const toogleCardManagerSystemeInfoRob = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_MANAGER_SYST_INFO_ROB,   
        })
    }
}
export const toogleCardSpecialiteIOT = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_SPECIALITE_IOT,   
        })
    }
}
export const toogleCardBTS = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_BTS,   
        })
    }
}
export const toogleCardBAC = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_BAC,   
        })
    }
}
export const toogleCardBEP = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.TOOGLE_CARD_BEP,   
        })
    }
}
