import { Fragment } from 'react'
import { actionListe } from '../Actions/TypeActions'

export default (
    state = {
        stateModal: false,
        titleHeader: "",
        body: <Fragment></Fragment>,
        configModal: "",
        size: ""
    },
    action
) => {
    switch (action.type){                
        case actionListe.OPEN_MODAL:
            return{
                ...state,
                stateModal: true,
                titleHeader: action?.titleHeader,   
                body: action?.body,
                size: action.size,
                configModal: action?.configModal
            }
        case actionListe.CLOSE_MODAL:
            return{
                ...state,
                stateModal: false,
                titleHeader: "",
                body: <Fragment></Fragment>,
                configModal: action?.configModal
            }

        default:
            return {
                ...state,
                configModal: ""
            }
    }
}

