import React from 'react'
import { Modal } from 'react-bootstrap'
import { connect } from 'react-redux'
//import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {closeModal} from '../../Redux/Actions/ActionModal'
import { configModalFooter, configModalHeader } from '../ModalConfig/functionConfigModal'
//import 'bootstrap/dist/css/bootstrap.min.css';

const ModalApp = (props) => {
    const infoModal = props.infoModal 
    console.log(infoModal)

    return (             
        <Modal
            show={infoModal.stateModal} 
            onHide={props.closeModal}
            size={infoModal.size}   
                     
        >
            <Modal.Header close={<button className="btn-close" onClick={props.closeModal}></button>}>
                {configModalHeader(infoModal.configModal, infoModal.titleHeader)}
                <i className="fa fa-times  fa-3x" aria-hidden="true" onClick={props.closeModal}></i>
            </Modal.Header>
            <Modal.Body>
                {infoModal.body}
            </Modal.Body>
            <Modal.Footer>
                {configModalFooter(infoModal.configModal)}
            </Modal.Footer>
        </Modal>            
    )
    
}

const mapStateToProps = (state) => {
    return {
        infoModal: state.ReducerModal
    }
}

export default connect(mapStateToProps, {closeModal})(ModalApp)
 