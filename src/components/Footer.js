import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  position: fixed;
  width: 100%;
  max-width: 1080px;
  bottom: 0;
  padding: 10px 10px;
  background-color: #160808c7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: 1px solid rgba(0, 0, 0, 0.534);
  box-sizing: border-box;
`
const Footer = () => {
    return (
        <Wrapper></Wrapper>
    )
}

export default Footer;