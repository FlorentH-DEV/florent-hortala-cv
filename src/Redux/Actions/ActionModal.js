import {actionListe} from './TypeActions'

export const openModal = (body, configModal, titleHeader, size="") => {
    return async (dispatch) => {
        dispatch({         
          type: actionListe.OPEN_MODAL,
          titleHeader: titleHeader,
          body: body,
          size: size, 
          configModal: configModal
        })
    }  
}

export const closeModal = () => {
    return async (dispatch) => {
        dispatch({         
            type: actionListe.CLOSE_MODAL  
        })
    }
}