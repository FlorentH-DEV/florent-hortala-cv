import React, { Fragment } from 'react'
import CardPersoImpression3D from '../../Lib/CardPersoImpression3D'

import Img1Model1 from '../../../Images/ExpPerso/Impression3D/1- SupportCasqueMicro/1- Model1.jpg'
import Img2Model1 from '../../../Images/ExpPerso/Impression3D/1- SupportCasqueMicro/1- Model2.jpg'
import Img3Model1 from '../../../Images/ExpPerso/Impression3D/1- SupportCasqueMicro/1- Model3.jpg'
import Img4Model1 from '../../../Images/ExpPerso/Impression3D/1- SupportCasqueMicro/1- Model4.jpg'
import Img3DModel1 from '../../../Images/ExpPerso/Impression3D/1- SupportCasqueMicro/1- SupportModel3D.JPG'

import Img1Model2 from '../../../Images/ExpPerso/Impression3D/2- SupportIphone4/2- Model1.jpg'
import Img2Model2 from '../../../Images/ExpPerso/Impression3D/2- SupportIphone4/2- Model2.jpg'
import Img3Model2 from '../../../Images/ExpPerso/Impression3D/2- SupportIphone4/2- Model3.jpg'
import Img3DModel2 from '../../../Images/ExpPerso/Impression3D/2- SupportIphone4/2- SupportModel3D.JPG'

import Img1Model3 from '../../../Images/ExpPerso/Impression3D/3- SupportIphone6sVelo/3- Model1.jpg'
import Img2Model3 from '../../../Images/ExpPerso/Impression3D/3- SupportIphone6sVelo/3- Model2.jpg'
import Img3Model3 from '../../../Images/ExpPerso/Impression3D/3- SupportIphone6sVelo/3- Model3.jpg'
import Img3DModel3 from '../../../Images/ExpPerso/Impression3D/3- SupportIphone6sVelo/3- SupportModel3D.JPG'

import Img1Model4 from '../../../Images/ExpPerso/Impression3D/4 - FleurFeteDesMere/FleurFeteDesMeresPhotoPatron_1.jpg'
import Img2Model4 from '../../../Images/ExpPerso/Impression3D/4 - FleurFeteDesMere/FleurFeteDesMeresPhotoPatron_2.jpg'
import Img3Model4 from '../../../Images/ExpPerso/Impression3D/4 - FleurFeteDesMere/FleurFeteDesMeresPhotoResultat_1.jpeg'
import Img3DModel4 from '../../../Images/ExpPerso/Impression3D/4 - FleurFeteDesMere/FleurFeteDesMeresImgPatron_1.JPG'

const Impression3D = () => {
    const titleModel1 = "Support de casque micro"
    const titleModel2 = "Support de téléphone pour vélo"
    const titleModel3 = "Support Iphone 4"
    const titleModel4 = "Fêtes des mères, positif plastique pour moulage en résine"

    const objetImgModel1 = {
        'model': Img3DModel1,
        'img':
        [
            Img2Model1,
            Img1Model1,
            Img3Model1,
            Img4Model1
        ]
    }
    const objetImgModel2 = {
        'model': Img3DModel2,
        'img':
        [
            Img1Model2,
            Img2Model2,
            Img3Model2
        ]
    }
    const objetImgModel3 = {
        'model': Img3DModel3,
        'img':
        [
            Img1Model3,
            Img2Model3,
            Img3Model3
        ]
    }
    const objetImgMode4 = {
        'model': Img3DModel4,
        'img':
        [
            Img1Model4,
            Img2Model4,
            Img3Model4
        ]
    }

    return (
        <div className='row'>
            <div className='col-lg-6'>
                <CardPersoImpression3D
                    title={titleModel1}
                    imgs={objetImgModel1}
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImpression3D
                    title={titleModel2}
                    imgs={objetImgModel2}
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImpression3D
                    title={titleModel3}
                    imgs={objetImgModel3}
                />
            </div>

            <div className='col-lg-6'>
                <CardPersoImpression3D
                    title={titleModel4}
                    imgs={objetImgMode4}
                />
            </div>
        </div>
    )
}

export default Impression3D
