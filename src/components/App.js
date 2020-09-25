import React from 'react';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import {HashRouter} from 'react-router-dom';
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
          <HashRouter basename='/'>
            <Header></Header>
             <Switch>
                <Route path='/' exact>
                  <Inicio></Inicio>
                </Route>
                <Route path='/Menu'>
                  <Menu></Menu>
                </Route>
                <Route path='/Contacto'>
                  <Contacto></Contacto>
                </Route>
                <Route path='/Acerca'>
                 <Acerca></Acerca>
                </Route>
              </Switch>
            <Footer></Footer>
          </HashRouter>
      </Wrapper>
    </Container>
  );
}

export default App;
