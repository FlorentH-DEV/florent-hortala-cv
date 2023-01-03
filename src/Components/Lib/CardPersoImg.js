import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CardPersoImg = (props) => {
    return (
        <Card className='cardChildPaddingBot text-center'>
            <Card.Header className='cardHeader'>{props.header}</Card.Header>
            <Card.Body>
                <div className='row'>
                    <Link to={props.pathOpenPage} className='textInfo'>Cliquer sur l'image pour avoir la description du projet</Link>
                </div>
                <div className='row'>
                    <Link to={props.pathOpenPage}><img className='sizeImg' src={props.img} alt='imgGenDocumentation'></img></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default CardPersoImg
