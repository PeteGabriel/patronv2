import React, { Component } from 'react';
import { Segment, Container } from 'semantic-ui-react';
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
    let style = Object.assign({}, photosSegmentStyle, {height: window.innerHeight})
    return (
      <Segment fluid style={style}>
        <Container style={{paddingTop:40, marginBottom: 50, border:0, boxShadow: 'none'}}>
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
      </Segment>)
  }

}


export default ImageShow


const photosSegmentStyle = {
  alignItems:'center', 
  border:0, 
  boxShadow: 'none', 
  background: LIGHT_ORANGE,
  paddingBottom: 10
}


const photos = [
  {
    src: require("./../assets/slideshow/rect_2.jpg"),
    width: 4,
    height: 3
  },
  {
    src: require("./../assets/slideshow/square_1.jpg"),
    width: 1,
    height: 1
  },
  {
    src: require("./../assets/slideshow/vertical_1.jpg"),
    width: 3,
    height: 4
  },
  {
    src: require("./../assets/slideshow/vertical_2.jpg"),
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: require("./../assets/slideshow/square_5.jpg"),
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: require("./../assets/slideshow/square_6.jpg"),
    width: 5,
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
