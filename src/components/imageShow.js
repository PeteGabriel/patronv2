import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { PURPLE_RAIN, PINK, LIGHT_ORANGE} from '../styles/colors';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

class ImageShow extends Component {

  constructor(props){
    super(props)
    this.state = {
      currentImage: 0,
      isOpen: false
    }

    this._openLightbox = this._openLightbox.bind(this)
    this._closeLightbox = this._closeLightbox.bind(this)
  }


  _openLightbox(e, { photo, index }){
    this.setState({currentImage: index, isOpen: true})
  }

  _closeLightbox = () => this.setState({currentImage: 0, isOpen: false});
  
  
  
  render(){
    return (
      <Container fluid style={photosSegmentStyle}>
        <Container style={{paddingTop:40, marginBottom: 50}}>
          <h2 className="content_text" style={{color: PURPLE_RAIN, marginBottom: 8}}>
            Siguenos y comparte tu experiencia
          </h2>
          <p className="high_class_text" style={{color: PINK}}>
            <b>@EventosElPatron</b>
          </p>
        </Container>
        <div style={{marginRight: 10, marginTop: 10, marginLeft: 10}}>
          <Gallery photos={photos} onClick={this._openLightbox} />
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
      </Container>)
  }

}


export default ImageShow


const photosSegmentStyle = {
  alignItems:'center', 
  border:0, 
  boxShadow: 'none', 
  background: LIGHT_ORANGE, 
  minHeight: 500,
  paddingBottom: 10
}


const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3
  }
]
