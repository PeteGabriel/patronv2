import React, {Component} from 'react';
import {Container, Segment} from 'semantic-ui-react';
import {LIGHT_ORANGE, PINK, PURPLE_RAIN} from '../styles/colors';
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import ImageKit from "imagekit-javascript";
import i18n from './../i18n';


class ImageSlideshow extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentImage: 0,
            isOpen: false
        }

        this._openLightbox = this._openLightbox.bind(this)
        this._closeLightbox = this._closeLightbox.bind(this)
    }


    _openLightbox(e, {photo, index}) {
        this.setState({currentImage: index, isOpen: true})
    }

    _closeLightbox = () => this.setState({currentImage: 0, isOpen: false});


    render() {
        let style = Object.assign({}, photosSegmentStyle, {
            height: window.innerHeight,
            overflow: 'scroll',
            overflowX: 'hidden'
        })
        return (
            <Segment style={style}>
                <Container style={{paddingTop: 40, marginBottom: 50, border: 0, boxShadow: 'none'}}>
                    <h2 className="content_text" style={{color: PURPLE_RAIN, marginBottom: 8}}>
                        {i18n.t('slideshow.title')}
                    </h2>
                    <p className="high_class_text">
                        <a style={{color: PINK}}
                           href="https://www.instagram.com/elpatroneventos" target="_blank" rel="noopener noreferrer">
                            <b>@EventosElPatron</b>
                        </a>
                    </p>
                </Container>
                <div style={{marginRight: 10, marginTop: 10, marginLeft: 10}}>
                    <Gallery photos={photos} onClick={this._openLightbox}/>
                    <ModalGateway>
                        {this.state.isOpen ? (
                            <Modal onClose={this._closeLightbox}>
                                <Carousel
                                    currentIndex={this.state.currentImage}
                                    views={photos.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </Segment>)
    }

}


export default ImageSlideshow


const photosSegmentStyle = {
    alignItems: 'center',
    border: 0,
    boxShadow: 'none',
    background: LIGHT_ORANGE,
    paddingBottom: 10
}

const imagekit = new ImageKit({
    urlEndpoint: process.env.REACT_APP_CDN_HOST,
    publicKey: process.env.REACT_APP_CDN_PUBLIC_API_KEY
});

const photos = [
    {
        src: imagekit.url({
            path: "/slideshow/rect_2_0F2BVPgWZeRdN.jpg",
            transformation: [{"height": "0.7", "width": "0.8"}]
        }),
        width: 4,
        height: 3
    },
    {
        src: imagekit.url({
            path: "/slideshow/square_1_esTgDUOixTciy.jpg",
            transformation: [{"height": "0.3", "width": "0.3"}]
        }),
        width: 1,
        height: 1
    },
    {
        src: imagekit.url({
            path: "/slideshow/vertical_1_pMRTsVf0_Z-Eu.jpg",
            transformation: [{"height": "0.8"}]
        }),
        width: 3,
        height: 4
    },
    {
        src: imagekit.url({
            path: "/slideshow/vertical_2_TdiGFPV8Xwp7.jpg",
            transformation: [{"height": "0.5"}]
        }),
        width: 3,
        height: 4
    },
    {
        src: imagekit.url({
            path: "/slideshow/vertical_3_cPqNHZyLqbI_.jpg",
            transformation: [{"height": "0.2", "width": "0.3"}]
        }),
        width: 3,
        height: 4
    },
    {
        src: imagekit.url({
            path: "/slideshow/square_5_vTkdtvLK75aH.jpg",
        }),
        width: 4,
        height: 3
    },
    {
        src: imagekit.url({
            path: "/slideshow/vertical_6_O8i4kotF2HM-m.jpg",
            transformation: [{"height": "0.8"}]
        }),
        width: 3,
        height: 4
    },
    {
        src: imagekit.url({
            path: "/slideshow/square_6_XDvKz7uHGk11u.jpg",
            transformation: [{"height": "0.9", "width": "0.8"}]
        }),
        width: 5,
        height: 3
    },
    {
        src: imagekit.url({
            path: "/slideshow/rect_3_bnrhnQKrI7ZTw.jpg",
            transformation: [{"height": "0.4", "width": "0.4"}]
        }),
        width: 4,
        height: 3
    },
    {
        src: imagekit.url({
            path: "/slideshow/vertical_5_UMFCEXYioohws.jpg",
            transformation: [{"height": "0.6"}]
        }),
        width: 3,
        height: 4
    },
    {
        src: imagekit.url({
            path: "/slideshow/rect_4_y6BKphCMd1Lx.jpg",
            transformation: [{"height": "0.3", "width": "0.4"}]
        }),
        width: 4,
        height: 3
    }
]
