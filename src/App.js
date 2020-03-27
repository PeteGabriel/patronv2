import React from 'react';
import './App.css';
import { 
  Responsive,
  Segment,
} from 'semantic-ui-react' 
import './components/footer'

import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Responsive minWidth={Responsive.onlyMobile.minWidth} className="App">
      <Segment textAlign='center' style={{padding: '1em 0em' }} vertical>
        <Header/>
        <Footer/>
      </Segment>
    </Responsive>
  );
}

export default App;
