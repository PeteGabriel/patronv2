import React, { Component } from 'react';
import ImageContainer  from "./imageContainer";
import {List, Responsive} from 'semantic-ui-react'
import {LIGHT_DARK} from '../styles/colors';

class ImageTextWarp extends Component {

  render(){
    let reverse = this.props.toReverse
    let content = reverse ? this._reverseContent : this._content 
    let images = reverse ? this._getImagesInReverse() : this._getImages()
    
    return <ImageContainer toReverse={reverse} content={content} imgs={images}/>
  }

  _getImages(){
    return [
      require("../assets/finca/1.jpg"),
      require("../assets/finca/2.jpg"),
      require("../assets/finca/3.jpg"),
      require("../assets/finca/4.jpg"),
      require("../assets/finca/5.jpg"),
      require("../assets/finca/6.jpg"),
    ]
  }
  
  _getImagesInReverse(){
    return [
      require("../assets/outside/1.jpg"),
      require("../assets/outside/2.jpg"),
      require("../assets/outside/3.jpg"),
      require("../assets/outside/4.jpg"),
      require("../assets/outside/5.jpg"),
      require("../assets/outside/6.jpg"),
      require("../assets/outside/7.jpg"),
      require("../assets/outside/8.jpg"),
    ]
  }

  _reverseContent(){
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
    let quote = window.innerWidth >= Responsive.onlyMobile.maxWidth ? 
       (<p className="quote" style={{position:"absolute",right: 50, marginTop: 70}}>
          <i>"Una atención personal y el interés por el detalle."</i>
        </p>) : null
    
    return (
      <div style={{margin: 'auto', position: "relative", marginRight: 0, textAlign: "left"}}>
          <p className="high_class_text" style={{color: LIGHT_DARK}}>
              Tenemos una amplia oferta de servicios.
          </p>

          <List style={{marginLeft: 0}} className="list_of_things">
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

  

  _content(){
    return (
    <span>
      <p style={{color: LIGHT_DARK}} className='high_class_text' >
        <i>Preciosa finca a las puertas del</i>
        <br/>
        <i>Parque de Los Alcornocales, en plena naturaleza.</i>
      </p>

      <p className="high_class_text" style={{marginTop: '2%', color: LIGHT_DARK}}>
        <i>Un sitio idílico donde podrá celebrar con todo tipo de comodidades</i>
        <br/>
        <i>tu evento deseado.</i>
      </p>
    </span>)
  }
}

export default ImageTextWarp