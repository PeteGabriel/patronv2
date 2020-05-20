import React, { Component } from 'react';
import ImageContainer  from "./imageContainer";
import {List} from 'semantic-ui-react'
import {LIGHT_DARK} from '../styles/colors';

class ImageAndTextContainer extends Component {
  
  render(){
    let reverse = this.props.toReverse
    let content = reverse ? this._reverseContent : this._content 
    let imgs = reverse ? this._getImgsReverse() : this._getImgs()
    
    return <ImageContainer toReverse={reverse} content={content} imgs={imgs}/>
  }

  _getImgs(){
    return [
      require("../assets/finca/1.jpg"),
      require("../assets/finca/2.jpg"),
      require("../assets/finca/3.jpg"),
      require("../assets/finca/4.jpg"),
      require("../assets/finca/5.jpg"),
      require("../assets/finca/6.jpg"),
    ]
  }
  
  _getImgsReverse(){
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
      "Carpa de 360m con barra y pista de baile con 250 personas sentadas.",
      "Barra exterior de mas de 15 metros con neveras, congeladores y grifos de cerveza.",
      "Zona de arboleda con mesas y sillones.",
      "Zona verde perfecta para session de fotos.",
      "Cocina completa para ayudar al catering.",
      "Amplias barbacoas y parrillas.",
      "Plaza de toros."
    ]
    return (
      <div style={{margin: 'auto', position: "relative", marginRight: 0, textAlign: "left"}}>
          <h2 className="content_text" style={{color: LIGHT_DARK}}>
              Tenemos una amplia oferta de servicios.
          </h2>

          <List style={{marginLeft: 13}} className="list_of_things">
              {
                content.map((line, idx) => (
                  <List.Item key={idx}>
                      <List.Icon name="check circle outline" color='grey'/>
                      <List.Content>
                        <p className="content_text" style={{color: 'grey',}}>
                          {line}
                        </p>
                      </List.Content>
                  </List.Item>)
              )}
          </List>
          <p className="quote" style={{position:"absolute",right: 50, marginTop: 70}}>
              <i>"Una atención personal y el interés por el detalle."</i>
          </p>
        </div>)
  }

  _content(){
    return (
    <span>
      <h1 style={{color: LIGHT_DARK}} className='high_class_text' >
        <i>Preciosa finca a las puertas del</i>
        <br/>
        <i>Parque de Los Alcornocales, en plena naturaleza.</i>
      </h1>

      <h1 className="high_class_text" style={{marginTop: '2%', color: LIGHT_DARK}}>
        <i>Un sitio idílico donde podrá celebrar con todo tipo de comodidades</i>
        <br/>
        <i>tu evento deseado.</i>
      </h1>
    </span>)
  }
}

export default ImageAndTextContainer