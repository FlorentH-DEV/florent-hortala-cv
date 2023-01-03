import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
const ModalBodyImpression3DCardCarousel = (props) => {
    const carousel = (
        <Carousel>
            {
                props.imgs.map((img, index) => (
                    <Carousel.Item key={index}><img className='sizeImgModal' src={img}></img></Carousel.Item>
                ))
            }
        </Carousel>
    )

    return (
        <div>
            <div className='row'>
                <div className='col-lg-3'></div>
                <div className='col-lg-6'>
                    {carousel}
                </div>
                <div className='col-lg-3'></div>
            </div>
        </div>
    )
}

export default ModalBodyImpression3DCardCarousel
