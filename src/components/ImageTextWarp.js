import React, {Component} from 'react';
import ImageContainer from "./imageContainer";
import {List, Responsive} from 'semantic-ui-react'
import {LIGHT_DARK} from '../styles/colors';
import ImageKit from "imagekit-javascript"

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
            this.imagekit.url({path: "/finca/1.jpg"}),
            this.imagekit.url({path: "/finca/2.jpg"}),
            this.imagekit.url({path: "/finca/3.jpg"}),
            this.imagekit.url({path: "/finca/7.jpg"}),
            this.imagekit.url({path: "/finca/4.jpg"}),
            this.imagekit.url({path: "/finca/5.jpg"}),
            this.imagekit.url({path: "/finca/6.jpg"})
        ]
    }

    _getImagesInReverse() {
        return [
            this.imagekit.url({path: "/outside/1.jpg"}),
            this.imagekit.url({path: "/outside/2.jpg"}),
            this.imagekit.url({path: "/outside/3.jpg"}),
            this.imagekit.url({path: "/outside/4.jpg"}),
            this.imagekit.url({path: "/outside/5.jpg"}),
            this.imagekit.url({path: "/outside/6.jpg"}),
            this.imagekit.url({path: "/outside/7.jpg"}),
            this.imagekit.url({path: "/outside/8.jpg"})
        ]
    }

    _reverseContent() {
        const content = [
            "Zona ampla de parking.",
            "Carpa con barra y pista de baile con 250 personas sentadas.",
            "Barra exterior de mas de 15 metros.",
            "Zona de arboleda con mesas y sillones.",
            "Zona verde perfecta para session de fotos.",
            "Cocina completa para ayudar al catering.",
            "Amplias barbacoas y parrillas.",
            "Plaza de toros."
        ]

        let quoteShouldAppear = window.innerWidth >= Responsive.onlyMobile.maxWidth
        let quote = null
        if (quoteShouldAppear) {
            quote = (
                <p className="quote" style={{position: "absolute", right: 50, marginTop: 70}}>
                    <i>"Una atención personal y el interés por el detalle."</i>
                </p>
            )
        } 

        let deviateList = this.state.isDesktopView ? 0 : 20
        
        return (
            <div style={{margin: 'auto', position: "relative", marginRight: 0, textAlign: "left"}}>
                <p className="high_class_text" style={{color: LIGHT_DARK}}>
                    Tenemos una amplia oferta de servicios.
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
        <i>Preciosa finca a las puertas del</i>
        <br/>
        <i>Parque de Los Alcornocales, en plena naturaleza.</i>
      </p>

      <p className="high_class_text" style={{marginTop: '2%', color: LIGHT_DARK}}>
        <i>Un sitio idílico donde podrás celebrar con todo tipo de comodidades</i>
        <br/>
        <i>tu evento deseado.</i>
      </p>
    </span>)
    }
}

export default ImageTextWarp