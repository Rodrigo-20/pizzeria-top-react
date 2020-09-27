import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Container = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: #160808c7;
  display: grid;
  grid-template-columns: repeat(3,  1fr);
  justify-items: center;
  border: 1px solid rgba(0, 0, 0, 0.534);
  box-sizing:border-box;
  @media screen and (max-width:768px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const CreatedBy = styled.div `
  grid-column:3/3;
  display: flex;
  align-items: center;
  @media screen and (max-width:768px){
    margin-top: 4px;
    grid-row:2;
    grid-column-start: 1;
  }
`

const Title = styled.h4 `
  color: whitesmoke;
  margin-right: 3px;
`

const SocialInfo = styled.div `
  display:flex;
  align-items: center;
  grid-column:2/3;
  grid-row:1;
  @media screen and (max-width:768px){
    grid-column-start: 1;
    grid-row:1;
  }
`
const Icon = styled(FontAwesomeIcon) `
  color: aliceblue;
  margin: 0 5px;
  margin-top: 3px;
  &:hover{
    cursor:pointer;
  } 
`

const Footer = () => {
    return (
        <Container>
          <CreatedBy>
            <Title>Creado por:</Title>
            <a href="https://github.com/daxas-boop/" target="_blank" rel='noopener noreferrer'>
              <Icon icon={faGithubSquare} size='2x'/>
            </a>
          </CreatedBy>
          <SocialInfo>
            <a href="https://github.com/daxas-boop/" target="_blank" rel='noopener noreferrer'>
              <Icon icon={faFacebookSquare} size='2x'/>
            </a>
            <a href="https://github.com/daxas-boop/" target="_blank" rel='noopener noreferrer'>
              <Icon icon={faWhatsappSquare} size='2x'/>
            </a>
            <a href="https://github.com/daxas-boop/" target="_blank" rel='noopener noreferrer'>
              <Icon icon={faInstagramSquare} size='2x'/>
            </a>
          </SocialInfo>
        </Container>
    )
}

export default Footer;