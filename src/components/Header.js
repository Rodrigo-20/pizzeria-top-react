import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.header`
    color: whitesmoke;
    position:relative;
    padding: 20px 10px;
    background-color: #160808c7;
    display: grid;
    grid-template-columns: 1fr 0.8fr 1.2fr;
    justify-items: center;
    border: 1px solid rgba(0, 0, 0, 0.63);
    box-sizing:border-box;
    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        justify-content: center;
    }
`

const Link = styled(NavLink)`
    font-weight: 550;
    color: rgba(0, 0, 0, 0.700);
    color: whitesmoke;
    padding: 15px 8px;
    text-decoration: none;
    border-radius:5px;
    margin:2.5px;
    &.active, &:hover{
        text-decoration-line:underline;
        color: #45fdeed5 !important;
        text-shadow: 1px 1px 8px rgb(179, 165, 139);
        cursor: pointer;
        background-color: rgba(117, 101, 101, 0.4);
        box-sizing: border-box;
    }
`

const LogoContainer = styled.div `
    grid-column: 2/3;
    display: flex;
    align-items: center;
    @media screen and (max-width:768px) {
        grid-column:1/2;
        margin-bottom: 7px;
    }
`

const Title = styled.h1`
    font-size: 25px;
`

const Nav = styled.nav `
    align-self: center;
`

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Title> Pizzeria TOP
                    <FontAwesomeIcon icon={faPizzaSlice} />
                </Title>
            </LogoContainer>
            <Nav>
                <Link exact to='/'>Inicio</Link>
                <Link to='/Menu'>Menu</Link>
                <Link to='/Contacto'>Contacto</Link>
                <Link to='/Acerca'>Acerca</Link>
            </Nav>
        </HeaderContainer>
    )
}

export default Header;