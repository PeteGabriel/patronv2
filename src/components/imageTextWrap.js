import React, { Component } from 'react';
import ImageContainer  from "./imageContainer";
import {List} from 'semantic-ui-react'

class ImageTextWarp extends Component {
  
  render(){
    let reverse = this.props.toReverse
    let content = reverse ? this._reverseContent : this._content 
    let imgs = reverse ? this._getImgsReverse() : this._getImgs()
    
    return <ImageContainer toReverse={reverse} content={content} imgs={imgs}/>
  }

  _getImgs(){
    return [
      require("../assets/outside/outside_img4.jpg"),
      require("../assets/outside/outside_img5.jpg"),
    ]
  }
  
  _getImgsReverse(){
    return [
      require("../assets/outside/outside_img5.jpg"),
      require("../assets/outside/outside_img4.jpg")
    ]
  }

  _reverseContent(){
    const content = [
      "Zona ampla de parking.",
      "Carpa de 360m2 con barra y pista de baile con 250 personas sentadas.",
      "Barra exterior de mas de 15 metros con neveras, congeladores y grifos de cerveza.",
      "Zona de arboleda con mesas y sillones.",
      "Zona verde perfecta para session de fotos.",
      "Cocina completa para ayudar al catering.",
      "Amplias barbacoas y parrillas.",
      "Plaza de toros."
    ]
    return (
      <div style={{margin: 'auto', position: "relative", marginRight: 0, textAlign: "left"}}>
          <h1 className="header high_class_text">
              <i>"Una atención personal y el interés por el detalle."</i>
          </h1>
          <h2 className="content_text sub_header">
              Tenemos una amplia oferta de servicios.
          </h2>

          <List style={{marginLeft: 13}} className="list_of_things">
              {
                content.map((line, idx) => (
                  <List.Item key={idx}>
                      <List.Icon name="check circle outline" color='grey'/>
                      <List.Content className="content_text contentt" style={{fontSize: 18, color: 'grey',}}>
                        {line}
                      </List.Content>
                  </List.Item>)
              )}
          </List>
        </div>)
  }

  _content(){
    return (
    <span >
      <h1 className='header high_class_text' >
        <i>
            Bonita finca a las puertas del Parque de Los Alcornocales, en plena naturaleza. 
        </i>
      </h1>

      <h1 className="header high_class_text" style={{marginTop: '2%'}}>
        <i>
            Un lugar donde podrá celebrar, con todo tipo de comodidades, tu evento deseado. 
        </i>
      </h1>
    </span>)
  }
}

export default ImageTextWarp