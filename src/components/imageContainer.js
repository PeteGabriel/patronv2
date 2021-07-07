import React, {Component} from 'react';
import Carousel from 'nuka-carousel'
import {Grid, Icon, Responsive, Segment} from 'semantic-ui-react'
import {LIGHT_ORANGE} from '../styles/colors'
import PropTypes from 'prop-types';

class ImageContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDesktopView: window.innerWidth >= Responsive.onlyMobile.maxWidth
        }

        this.carouselRef = null
        this.isDesktopView = window.innerWidth >= Responsive.onlyMobile.maxWidth
        this._buildCarouselForDesktop = this._buildCarouselForDesktop.bind(this)
        this._buildCarouselForMobile = this._buildCarouselForMobile.bind(this)
        this._handleNormalLayout = this._handleNormalLayout.bind(this)
        this._handleReverseLayout = this._handleReverseLayout.bind(this)
    }


    render() {
        let carouselBuilder = this.isDesktopView ? this._buildCarouselForDesktop : this._buildCarouselForMobile

        if (this.props.toReverse) {
            return this._handleReverseLayout(this.props.imgs,
                (imgs) => carouselBuilder(imgs),
                () => this.props.content()
            )
        }
        return this._handleNormalLayout(
            this.props.imgs,
            (imgs) => carouselBuilder(imgs),
            () => this.props.content())
    }

    _getGridRowHeight() {
        return window.innerHeight
    }

    _handleNormalLayout(imgs, carouselBuilder, contentBuilder) {
        const containerStyle = {
            paddingRight:  this.state.isDesktopView ? '4%' : '0%',
            paddingLeft: this.state.isDesktopView ? '4%' : '0%',
            alignItems: 'center',
            overflow: 'auto',
        }
        let style = Object.assign({}, containerStyle, {background: LIGHT_ORANGE})
        if (this.isDesktopView) {
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
                <Grid columns={2} stackable textAlign='center'
                      style={{height: this._getGridRowHeight(), alignContent: 'center'}}>
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
        const containerStyle = {
            paddingRight:  this.state.isDesktopView ? '4%' : '0%',
            paddingLeft: this.state.isDesktopView ? '4%' : '0%',
            alignItems: 'center',
            overflow: 'auto',
        }
        let segmStyle = Object.assign({}, containerStyle, {border: 0, boxShadow: 0, margin: 0})
        let rowStyle = {
            height: window.innerHeight, 
            paddingBottom: this.state.isDesktopView ? '0%' :'20%', 
            paddingTop: this.state.isDesktopView ? '0%' :'20%'
        }
        return (
            <Segment id="imageTextWarpSegmentReverse" style={segmStyle}>
                <Grid columns={2} stackable textAlign='center'>
                    <Grid.Row verticalAlign='middle' style={rowStyle}>
                        <Grid.Column>
                            {contentBuilder()}
                        </Grid.Column>
                        <Grid.Column>
                            {carouselBuilder(imgs)}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }

    _buildCarouselForMobile(imgs) {
        return (
            <Carousel
                style={{border: 0, outline: 'none', boxShadow: 'none', flexGrow: 1, maxWidth: '100%'}}
                ref={ref => {
                    this.carouselRef = ref;
                }}
                framePadding={"0px"}
                heightMode={'current'}
                renderBottomCenterControls={
                    () => {
                        return null
                    }
                }
                renderCenterLeftControls={({previousSlide}) => {
                    return (
                        <div id='controls' onClick={previousSlide}>
                            <Icon size='small' inverted name="arrow left"/>
                        </div>)
                }}
                renderCenterRightControls={({nextSlide, currentSlide, slideCount}) => {
                    if ((currentSlide + 1) === slideCount) {
                        return null
                    }
                    return (
                        <div id='controls' onClick={nextSlide}>
                            <Icon size='small' inverted name="arrow right"/>
                        </div>)
                }}
                swiping>
                {imgs.map((img, idx) =>
                    <img alt={"Carousel image number " + idx}
                         key={img}
                         src={img}
                         onLoad={this._handleLoadImage}
                         style={{paddingBottom: '5%'}}/>
                )}
            </Carousel>
        )
    }

    _buildCarouselForDesktop(imgs) {
        return (
            <Carousel
                style={{border: 0, outline: 'none', boxShadow: 'none', flexGrow: 1, maxWidth: '100%'}}
                ref={ref => {
                    this.carouselRef = ref;
                }}
                framePadding={"0px"}
                heightMode={'current'}
                renderCenterLeftControls={({previousSlide, currentSlide}) => {
                    if ((currentSlide + 1) === 1) {
                        return null
                    }
                    return (
                        <div id='controls' onClick={previousSlide}>
                            <Icon size='big' inverted name="arrow left"/>
                        </div>)
                }}
                renderCenterRightControls={({nextSlide, currentSlide, slideCount}) => {
                    if ((currentSlide + 1) === slideCount) {
                        return null
                    }
                    return (
                        <div id='controls' onClick={nextSlide}>
                            <Icon size='big' inverted name="arrow right"/>
                        </div>)
                }}
                swiping>
                {imgs.map((img, idx) =>
                    <img alt={"Carousel image number " + idx}
                         key={img}
                         src={img}
                         onLoad={this._handleLoadImage}
                         style={{paddingBottom: '5%'}}/>
                )}
            </Carousel>
        )
    }

    _handleLoadImage = () => {
        this.carouselRef.setDimensions()
    }

}

export default ImageContainer



ImageContainer.propTypes = {
    content: PropTypes.func.isRequired,
    toReverse: PropTypes.bool,
    imgs: PropTypes.array.isRequired
};

