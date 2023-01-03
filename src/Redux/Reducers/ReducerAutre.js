import { actionListe } from '../Actions/TypeActions'

export default (
    state = {
        valueFiltre: ''
    },
    action
) => {
    switch (action.type){ 
        case actionListe.SEARCH_FILTRE:
            return {
                ...state,
                valueFiltre: action.value
            }

        default:
            return {
                ...state
            }
    }
}

