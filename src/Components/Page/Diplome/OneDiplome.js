import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import './oneDiplome.css'

const OneDiplome = (props) => {

    const classArrowExperiences = (props.show)? 'fas fa-angle-double-up' : 'fas fa-angle-double-down'

    return (
        <Card className='cardChildPaddingBot'>
            <Card.Header className='text-center'>
                <a href={props.diplomePDF} download={props.title}><i className="fas fa-download"></i></a>
                
                <strong onClick={props.fct}> {props.title} </strong>
                <i className={classArrowExperiences} onClick={props.fct}></i>
            </Card.Header>
            {
                (props.show)?
                    <Card.Body><img src={props.img} className='imgDiplome'></img></Card.Body>
                :
                    <Fragment></Fragment>
            }

        </Card>
    )
}

export default OneDiplome


