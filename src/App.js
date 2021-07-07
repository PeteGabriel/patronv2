import React, {Component} from 'react';
import {Responsive, Segment,} from 'semantic-ui-react'
import './components/footer'
import Header from './components/header';
import Footer from './components/footer';
import ImageTextWarp from './components/ImageTextWarp';
import ImageSlideshow from './components/imageSlideshow';
import Contact from './components/contact';
import i18n from './i18n';

class App extends Component {
    
    constructor(props){
      super(props)
      this.state = {
        languageSelected: 'es',
      }
      this.updateLang = this.updateLang.bind(this)
    }

    //use this function to update the current selected language
    updateLang(lang){
      this.setState({languageSelected: lang})
      i18n.changeLanguage(lang)
    }

    render() {
      return (
        <Responsive minWidth={Responsive.onlyMobile.minWidth} className="App">
            <Segment textAlign='center' style={{padding: '1em 0em'}} vertical>
                <Header onLanguageChange={this.updateLang} />
                <ImageTextWarp />
                <ImageTextWarp toReverse />
                <ImageSlideshow/>
                <Contact/>
                <Footer/>
            </Segment>
        </Responsive>
      );
    }
}

export default App;
