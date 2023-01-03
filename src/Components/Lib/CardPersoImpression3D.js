import React from 'react'
import { Carousel } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { connect } from 'react-redux'
import {openModal} from '../../Redux/Actions/ActionModal'
import ModalBodyImpression3DCardCarousel from '../ModalConfig/Body/ModalBodyImpression3DCardCarousel'
import ModalBodyImpression3DCardImg from '../ModalConfig/Body/ModalBodyImpression3DCardImg'
import './cardPersoImpression3D.css'

const CardPersoImpression3D = (props) => {
    
    const  imgs = props.imgs
    const carousel = (
        <Carousel>
            {
                imgs.img.map((img, index) => (
                    <Carousel.Item key={index}><img className='sizeImgCard' src={img}></img></Carousel.Item>
                ))
            }
        </Carousel>
    )

    return (
        <Card className='cardParentPaddingBot'>
            <Card.Header  className='cardHeader text-center'>{props.title}</Card.Header>
            <Card.Body>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader text-center'>Model 3D</Card.Header>
                            <Card.Body>
                                <img className='sizeImgCard' onClick={() => props.openModal(<ModalBodyImpression3DCardImg img={props.imgs.model}/>, 'ModalImpression3DCard', props.title, 'xl')} src={props.imgs.model}></img>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-6'>
                        <Card className='cardChildPaddingBot'>
                            <Card.Header className='cardHeader text-center'>Réel</Card.Header>
                            <Card.Body>
                                <div onClick={() => props.openModal(<ModalBodyImpression3DCardCarousel imgs={imgs.img}/>, 'ModalImpression3DCard', props.title, 'xl')}>{carousel}</div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

export default connect(null, {openModal})(CardPersoImpression3D)
