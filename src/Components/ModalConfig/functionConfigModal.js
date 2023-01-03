// Footer
import ModalFooterDefault from "./Footer/ModalFooterDefault"
// header
import ModalHeaderImpression3DCard from "./Header/ModalHeaderImpression3DCard"
import ModalHeaderDefault from "./Header/ModalHeaderDefault"

export const configModalFooter = (nameComponentBody) => {
    switch(nameComponentBody){        
        default:
            return (
                <ModalFooterDefault/>
            )
    }
}

export const configModalHeader = (nameComponentBody, title) => {
    switch(nameComponentBody){  
        case 'ModalImpression3DCard':
            return (
                <ModalHeaderImpression3DCard
                    title={title}
                />
            )

        default:
            return (
                <ModalHeaderDefault/>
            )
    }
}
