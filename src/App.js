import React from 'react';
import './App.css';
import { 
  Responsive,
  Segment,
} from 'semantic-ui-react' 
import './components/footer'

import Header from './components/header';
import Footer from './components/footer';
import ImageAndTextContainer from './components/imageAndTextContainer';
import ImageShow from './components/imageShow';
import Contact from './components/contact';

function App() {
  return (
    <Responsive minWidth={Responsive.onlyMobile.minWidth} className="App">
      <Segment textAlign='center' style={{padding: '1em 0em' }} vertical>
        <Header/>
        <ImageAndTextContainer />
        <ImageAndTextContainer toReverse />
        <ImageShow/>
        <Contact/>
        <Footer/>
      </Segment>
    </Responsive>
  );
}

export default App;
