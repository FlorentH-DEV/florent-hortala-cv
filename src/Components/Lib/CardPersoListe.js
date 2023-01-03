import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'

const CardPersoListe = (props) => {

    const cardBody = props.body.map((element, index) => (
        <Fragment key={index}><li>{element}</li></Fragment>
    ))

    return (
        <Card className='cardChildPaddingBot'>
            <Card.Header className='text-center cardHeader'>{props.header}</Card.Header>
            <Card.Body><ul>{cardBody}</ul></Card.Body>
        </Card>
    )
}

export default CardPersoListe
