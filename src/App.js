import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from '@emotion/styled'
import Inicio from './components/pages/Inicio'
import Menu from './components/pages/Menu'
import Contacto from './components/pages/Contacto'
import Acerca from './components/pages/Acerca'
import Header from './components/Header'
import Footer from './components/Footer'
import Background from './images/background.png'

const Container = styled.div `
  background-color: #cccccc;
  background-image: url(${Background});
  background-repeat: repeat;
  background-attachment: fixed;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  background-size: cover;
  background-position: center left;
`

const Wrapper = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  padding-bottom:70px;
  box-sizing: border-box;
  @media screen and (max-width:768px){
    padding-bottom:130px;
  }
`

function App() {
  return (
    <Container>
      <Wrapper>
          <Router>
            <Header></Header>
             <Switch>
                <Route path='/' exact={true}>
                  <Inicio></Inicio>
                </Route>
                <Route path='/menu'>
                  <Menu></Menu>
                </Route>
                <Route path='/contacto' >
                  <Contacto></Contacto>
                </Route>
                <Route path='/acerca'>
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
