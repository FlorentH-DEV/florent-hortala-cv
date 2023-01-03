import {actionListe} from './TypeActions'

/* CV */
export const setSearchFiltre = (value) => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.SEARCH_FILTRE,
            value: value   
        })
    }
}