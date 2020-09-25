import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import styled from '@emotion/styled'
import Inicio from './pages/Inicio'
import Menu from './pages/Menu'
import Contacto from './pages/Contacto'
import Acerca from './pages/Acerca'
import Header from './Header'
import Footer from './Footer'
import Background from '../images/background.png'

const Container = styled.div `
  background-color: #cccccc;
  background-image: url(${Background});
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-position: center;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
`
const Wrapper = styled.div`
  padding-bottom: 45px;
  max-width: 1080px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
`

function App() {
  return (
    <Container>
      <Wrapper>
        <Router>
          <Header></Header>
            <Switch>
              <Route path='restaurant-page-react/Inicio/Inicio' exact>
                <Inicio></Inicio>
              </Route>
              <Route path='restaurant-page-react/Menu'>
                <Menu></Menu>
              </Route>
              <Route path='restaurant-page-react/Contacto'>
                <Contacto></Contacto>
              </Route>
              <Route path='restaurant-page-react/Acerca'>
                <Acerca></Acerca>
              </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </Wrapper>
    </Container>
  );
}

export default App;
