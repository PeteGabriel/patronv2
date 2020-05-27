import React, {Component} from 'react';
import Carousel from 'nuka-carousel'
import { Icon, Segment, Grid, Responsive } from 'semantic-ui-react'
import {LIGHT_ORANGE} from '../styles/colors'
import PropTypes from 'prop-types';

class ImageContainer extends Component {

  constructor(props) {
		super(props)

		this.carouselRef = null
		this.isDesktopView = window.innerWidth >= Responsive.onlyMobile.maxWidth
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
	
	_getGridRowHeight(){
    if (this.isDesktopView){
      return window.innerHeight
    }else {
			//only 80% of the view should be enough
			return (window.innerHeight * 70) / 100
    }
	}

	_showArrowSigns = () => this.isDesktopView

  _handleNormalLayout(imgs) {
	  let style = Object.assign({}, containerStyle, {background: LIGHT_ORANGE})
	  return (
		  <Segment id="imageTextWrapSegment" style={style}>
			  <Grid columns={2} stackable textAlign='center' style={{height: this._getGridRowHeight()}}>
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
	let style = Object.assign({}, containerStyle, {border: 0, boxShadow: 0, margin: 0})
	  return (
		<Segment id="imageTextWarpSegmentReverse" style={style}>
			<Grid columns={2} stackable textAlign='center'>
				<Grid.Row verticalAlign='middle' style={{height: this._getGridRowHeight()}}>
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
				ref={ref => {
								this.carouselRef = ref;
							}}
				framePadding={"0px"}
				heightMode={'current'}
				renderCenterLeftControls={({ previousSlide, currentSlide }) => {
					if ((currentSlide+1) === 1){
						return null
					}
					if (this._showArrowSigns()){
						return (
							<div id='controls' onClick={previousSlide}>
								<Icon size='big' inverted name="arrow left"/>
							</div>)
					}else {
						return null
					}
				}}
				renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {
					if ((currentSlide+1) === slideCount){
						return null
					}
					if (this._showArrowSigns()){
						return (
							<div id='controls' onClick={nextSlide}>
								<Icon size='big' inverted name="arrow right"/>
							</div>)
					}else {
						return null
					}
				}}
				swiping>
				{imgs.map((img) => 
						<img alt="img" 
							key={img}
							src={img}
							onLoad={this._handleLoadImage} 
							style={{ paddingBottom: '5%' }} />
				)}
			</Carousel>
	  )
	}
	
	_handleLoadImage = () => {
		this.carouselRef.setDimensions()
	}

}

export default ImageContainer

const containerStyle = {
	paddingRight: '4%',
	paddingLeft: '4%',
	alignItems: 'center',
	overflow: 'auto',
}

ImageContainer.propTypes = {
	content: PropTypes.func.isRequired,
	toReverse: PropTypes.bool,
	imgs: PropTypes.array.isRequired
	};

