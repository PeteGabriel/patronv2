import React from 'react';
import { 
  Responsive,
  Segment,
} from 'semantic-ui-react' 
import './components/footer'
import Header from './components/header';
import Footer from './components/footer';
import ImageTextWarp from './components/ImageTextWarp';
import ImageSlideshow from './components/imageSlideshow';
import Contact from './components/contact';

function App() {
  return (
    <Responsive minWidth={Responsive.onlyMobile.minWidth} className="App">
      <Segment textAlign='center' style={{padding: '1em 0em' }} vertical>
        <Header/>
        <ImageTextWarp />
        <ImageTextWarp toReverse />
        <ImageSlideshow/>
        <Contact/>
        <Footer/>
      </Segment>
    </Responsive>
  );
}

export default App;
