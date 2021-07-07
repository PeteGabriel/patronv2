import React, {Component} from 'react';
import ImageContainer from "./imageContainer";
import {List, Responsive} from 'semantic-ui-react'
import {LIGHT_DARK} from '../styles/colors';
import ImageKit from "imagekit-javascript";
import i18n from '../i18n';

class ImageTextWarp extends Component {

    imagekit = null

    constructor() {
        super()
        this.state = {
            isDesktopView: window.innerWidth >= Responsive.onlyMobile.maxWidth,
        }
        this.imagekit = new ImageKit({
            urlEndpoint: process.env.REACT_APP_CDN_HOST,
            publicKey: process.env.REACT_APP_CDN_PUBLIC_API_KEY
        })

        this._getImages = this._getImages.bind(this)
        this._getImagesInReverse = this._getImagesInReverse.bind(this)
        this._reverseContent = this._reverseContent.bind(this)
    }

    render() {
        let reverse = this.props.toReverse
        let content = reverse ? this._reverseContent : this._content
        let images = reverse ? this._getImagesInReverse() : this._getImages()

        return <ImageContainer toReverse={reverse} content={content} imgs={images}/>
    }

    _getImages() {
        return [
            this.imagekit.url({path: "/finca/1_NIPBDBcekqbuX.jpg"}),
            this.imagekit.url({path: "/finca/2_buj-75Pnb2k4.jpg"}),
            this.imagekit.url({path: "/finca/3_l9HKsShhbmnVF.jpg"}),
            this.imagekit.url({path: "/finca/7_C4bxuD7cS8Xk.jpg"}),
            this.imagekit.url({path: "/finca/4_YoP0oHVdoZphA.jpg"}),
            this.imagekit.url({path: "/finca/5_LCLMLv_8SRZuU.jpg"}),
            this.imagekit.url({path: "/finca/6_BSev22KpQyksg.jpg"})
        ]
    }

    _getImagesInReverse() {
        return [
            this.imagekit.url({path: "/outside/1_JuqMP4gk6b3-c.jpg"}),
            this.imagekit.url({path: "/outside/2_R-C4SJz3QRJ2e.jpg"}),
            this.imagekit.url({path: "/outside/3_d4cltf33uwI6.jpg"}),
            this.imagekit.url({path: "/outside/4_mNzVKJN-BVNe.jpg"}),
            this.imagekit.url({path: "/outside/5_BxLI0byx5_PX5.jpg"}),
            this.imagekit.url({path: "/outside/6_GKrY3ia577oDI.jpg"}),
            this.imagekit.url({path: "/outside/7_WXac-XGyJV9WZ.jpg"}),
            this.imagekit.url({path: "/outside/8_ZE5Xe_nZ0hsC.jpg"})
        ]
    }

    _reverseContent() {
        const content = [
            i18n.t('text_wrapper.content_reverse.point_1'),
            i18n.t('text_wrapper.content_reverse.point_2'),
            i18n.t('text_wrapper.content_reverse.point_3'),
            i18n.t('text_wrapper.content_reverse.point_4'),
            i18n.t('text_wrapper.content_reverse.point_5'),
            i18n.t('text_wrapper.content_reverse.point_6'),
            i18n.t('text_wrapper.content_reverse.point_7'),
            i18n.t('text_wrapper.content_reverse.point_8')
        ]

        let quoteShouldAppear = window.innerWidth >= Responsive.onlyMobile.maxWidth
        let quote = null
        if (quoteShouldAppear) {
            quote = (
                <p className="quote" style={{position: "absolute", right: 50, marginTop: 70}}>
                    <i>{i18n.t('text_wrapper.content_reverse.quote')}</i>
                </p>
            )
        } 

        let deviateList = this.state.isDesktopView ? 0 : 20
        
        return (
            <div style={{margin: 'auto', position: "relative", marginRight: 0, textAlign: "left"}}>
                <p className="high_class_text" style={{color: LIGHT_DARK}}>
                    {i18n.t('text_wrapper.content_reverse.title')}
                </p>

                <List style={{marginLeft: deviateList}} className="list_of_things">
                    {
                        content.map((line, idx) => (
                            <List.Item key={idx}>
                                <List.Icon name="check circle outline" color='grey'/>
                                <List.Content>
                                    <p className="content_text" style={{color: 'grey',}}>
                                        {line}
                                    </p>
                                </List.Content>
                            </List.Item>))
                    }
                </List>
                {quote}
            </div>)
    }


    _content() {
        return (
            <span>
      <p style={{color: LIGHT_DARK}} className='high_class_text'>
        <i>{i18n.t('text_wrapper.content.phrase_1')}</i>
        <br/>
        <i>{i18n.t('text_wrapper.content.phrase_2')}</i>
      </p>

      <p className="high_class_text" style={{marginTop: '2%', color: LIGHT_DARK}}>
        <i>{i18n.t('text_wrapper.content.phrase_3')}</i>
        <br/>
        <i>{i18n.t('text_wrapper.content.phrase_4')}</i>
      </p>
    </span>)
    }
}

export default ImageTextWarp