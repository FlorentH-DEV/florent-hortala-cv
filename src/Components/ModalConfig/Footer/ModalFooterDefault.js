import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { closeModal } from '../../../Redux/Actions/ActionModal'

const ModalFooterDefault = (props) => {
    return (
        <Fragment>
            <button className="btn btn-white" onClick={props.closeModal}>Close</button>
        </Fragment>
    )
}

export default connect(null, {closeModal})(ModalFooterDefault)
