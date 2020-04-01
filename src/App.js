import React from 'react';
import './App.css';
import { 
  Responsive,
  Segment,
} from 'semantic-ui-react' 
import './components/footer'

import Header from './components/header';
import Footer from './components/footer';
import ImageTextWarp from './components/imageTextWrap';
import ImageSlideshow from './components/imageSlideshow';

function App() {
  return (
    <Responsive minWidth={Responsive.onlyMobile.minWidth} className="App">
      <Segment textAlign='center' style={{padding: '1em 0em' }} vertical>
        <Header/>
        <ImageTextWarp />
        <ImageTextWarp toReverse />
        <ImageSlideshow/>
        <Footer/>
      </Segment>
    </Responsive>
  );
}


//TODO remove content from here


export default App;
