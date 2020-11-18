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
		this._buildCarouselForDesktop = this._buildCarouselForDesktop.bind(this)
		this._buildCarouselForMobile = this._buildCarouselForMobile.bind(this)
		this._handleNormalLayout = this._handleNormalLayout.bind(this)
		this._handleReverseLayout = this._handleReverseLayout.bind(this)
	}
	

  render() {
		let carouselBuilder = this.isDesktopView ? this._buildCarouselForDesktop : this._buildCarouselForMobile
		
	  if (this.props.toReverse){
			return this._handleReverseLayout(this.props.imgs,
			  (imgs) => carouselBuilder(imgs), 
			  () => this.props.content()
			)
		}
		return this._handleNormalLayout(
			this.props.imgs, 
			(imgs) => carouselBuilder(imgs), 
			() => this.props.content()
		)
	}
	
	_getGridRowHeight(){
    
      return window.innerHeight
    
	}

	_getGridRowHeightForReverse(){
    if (this.isDesktopView){
      return window.innerHeight
    }else {
			//only 80% of the view should be enough
			return (window.innerHeight * 80) / 100
    }
	}

  _handleNormalLayout(imgs, carouselBuilder, contentBuilder) {
		let style = Object.assign({}, containerStyle, {background: LIGHT_ORANGE})
		if (this.isDesktopView){
			return (
				<Segment id="imageTextWrapSegment" style={style}>
					<Grid columns={2} stackable textAlign='center' style={{height: this._getGridRowHeight()}}>
						<Grid.Row verticalAlign='middle'>
							<Grid.Column>
								{carouselBuilder(imgs)}
							</Grid.Column>
							<Grid.Column>
								{contentBuilder()}
							</Grid.Column>
						</Grid.Row>
					</Grid> 
				</Segment>
			)
		}
		return (
			<Segment id="imageTextWrapSegment" style={style}>
				<Grid columns={2} stackable textAlign='center' style={{height: this._getGridRowHeight(), alignContent: 'center'}}>
						<Grid.Column>
							{carouselBuilder(imgs)}
						</Grid.Column>
						<Grid.Column>
							{contentBuilder()}
						</Grid.Column>
				</Grid> 
			</Segment>
		)
  }

  _handleReverseLayout(imgs, carouselBuilder, contentBuilder) {
		let style = Object.assign({}, containerStyle, {border: 0, boxShadow: 0, margin: 0})
	  return (
		<Segment id="imageTextWarpSegmentReverse" style={style}>
			<Grid columns={2} stackable textAlign='center'>
				<Grid.Row verticalAlign='middle' style={{height: window.innerHeight}}>
					<Grid.Column>
					  {contentBuilder()}
					</Grid.Column>
					<Grid.Column >
					  {carouselBuilder(imgs)}
					</Grid.Column>
				</Grid.Row>
			</Grid> 
		</Segment>
	  )
	}
	
	_buildCarouselForMobile(imgs){
		return (
			<Carousel
				style={{border:0, boxShadow: 'none', flexGrow: 1, maxWidth: '100%' }}
				ref={ref => {
								this.carouselRef = ref;
							}}
				framePadding={"0px"}
				heightMode={'current'}
				renderBottomCenterControls={
					() => { return null }
				}
				renderCenterLeftControls={({ previousSlide }) => {
					return (
						<div id='controls' onClick={previousSlide}>
							<Icon size='small' inverted name="arrow left"/>
						</div>)
				}}
				renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {
					if ((currentSlide+1) === slideCount){
						return null
					}
					return (
					  <div id='controls' onClick={nextSlide}>
							<Icon size='small' inverted name="arrow right"/>
						</div>)
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

  _buildCarouselForDesktop(imgs) {
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
					return (
						<div id='controls' onClick={previousSlide}>
							<Icon size='big' inverted name="arrow left"/>
						</div>)
				}}
				renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {
					if ((currentSlide+1) === slideCount){
						return null
					}
					return (
						<div id='controls' onClick={nextSlide}>
							<Icon size='big' inverted name="arrow right"/>
						</div>)
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

