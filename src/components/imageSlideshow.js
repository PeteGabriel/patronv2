import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import { Container, Image, Segment, Responsive, Icon } from 'semantic-ui-react';
import { PURPLE_RAIN, PINK, LIGHT_ORANGE} from '../styles/colors';


class ImageSlideshow extends Component {

  constructor(props){
    super(props)  

    let slidesToShow = 0
    if (window.innerWidth >= Responsive.onlyMobile.maxWidth){
      slidesToShow = 4
    }else {
      slidesToShow = 1
    }
    this.state = {
      imgs: [
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450',
        'https://via.placeholder.com/450'
      ],
      slidesToShow: slidesToShow
    }
  }


  render(){
    return (
      <Segment style={photosSegmentStyle}>
        <Container style={{paddingTop:40, marginBottom: 50}}>
          <h2 className="content_text" style={{color: PURPLE_RAIN, marginBottom: 8}}>
            Siguenos y comparte tu experiencia
          </h2>
          <p className="high_class_text" style={{color: PINK}}>
            <b>@EventosElPatron</b>
          </p>
        </Container>
        <Carousel
            style={{border:0, boxShadow: 'none', flexGrow: 1, maxWidth: '100%', marginBottom: 80}}
            slidesToShow={this.state.slidesToShow}
            renderCenterLeftControls={({ previousSlide }) => (
              <div id='controls' onClick={previousSlide}>
                  <Icon size='big' inverted name="arrow left"/>
              </div>
            )}
            renderCenterRightControls={({ nextSlide }) => (
              <div id='controls' onClick={nextSlide}>
                  <Icon size='big' inverted name="arrow right"/>
              </div>
            )}
            renderBottomCenterControls={() => null}>      
              {
                this.state.imgs.map((url, idx) =>(
                  <div key={idx} style={{marginRight: 15}}>
                    <Image src={url} rounded />
                  </div>
                )
              )}
          </Carousel>
        
      </Segment>)
  }

}

export default ImageSlideshow


const photosSegmentStyle = {
  alignItems:'center', 
  border:0, 
  boxShadow: 'none', 
  background: LIGHT_ORANGE, 
  minHeight: 500
}