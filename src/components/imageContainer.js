import React, {Component} from 'react';
import Carousel from 'nuka-carousel'
import { 
    Icon,
    Segment,
    Grid
} from 'semantic-ui-react'
import {LIGHT_ORANGE} from '../styles/colors'

class ImageContainer extends Component {

  /**
   * Props:
   *   content: Component to be displayed as content
   *   elemId: 
   *   toReverse: Flag to reverse layout
   *   imgs: Array of images to display
   */
  constructor(props) {
      super(props)
      this._buildCarousel = this._buildCarousel.bind(this)
      this._handleNormalLayout = this._handleNormalLayout.bind(this)
      this._handleReverseLayout = this._handleReverseLayout.bind(this)
  }

  render() {
      if (this.props.toReverse){
          return this._handleReverseLayout(this.props.imgs)
      }
      return this._handleNormalLayout(this.props.imgs)
  }

  _handleNormalLayout(imgs) {
      let style = Object.assign({}, containerStyle, {background: LIGHT_ORANGE})
      return (
          <Segment id="imageTextWrapSegment" style={style}>
              <Grid columns={2} stackable textAlign='center'>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        {this._buildCarousel(imgs)}
                    </Grid.Column>
                    <Grid.Column >
                        {this.props.content()}
                    </Grid.Column>
                </Grid.Row>
              </Grid> 
          </Segment>
      )
  }

  _handleReverseLayout(imgs) {
    let style = Object.assign({}, containerStyle, {border: 0, boxShadow: 0})
      return (
        <Segment id="imageTextWarpSegmentReverse" style={style}>
            <Grid columns={2} stackable textAlign='center'>
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column>
                        {this.props.content()}
                    </Grid.Column>
                    <Grid.Column >
                        {this._buildCarousel(imgs)}
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
      )
  }

  _buildCarousel(imgs) {
      return (
        <Carousel
            style={{border:0, boxShadow: 'none', flexGrow: 1, maxWidth: '100%' }}
            initialSlidewidth={500}
            initialSlideHeight={500}
            heightMode='first'
            autoplay
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
            swiping>
            {imgs.map((img) => <img alt="img" key={img} src={img} style={{ paddingBottom: '5%' }} />)}
        </Carousel >
      )
  }
}

export default ImageContainer

const containerStyle = {
    padding: '4%',
    alignItems: 'center',
    overflow: 'auto'
}