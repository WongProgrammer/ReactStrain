import React from 'react';
import StrainForm from './weed-components/StrainForm';
import Navigation from './weed-components/Navigation.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
  return(
    <div className="App">
      <Navigation></Navigation>
      <Container>
        <StrainForm></StrainForm>
      </Container>
    </div>
  );
};

export default App;
