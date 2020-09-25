import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.header`
    color: whitesmoke;
    width:100%;
    padding: 20px 10px;
    background-color: #160808c7;
    display:flex;
    border: 1px solid rgba(0, 0, 0, 0.63);
    box-sizing: border-box;
`

const Link = styled(NavLink)`
    font-weight: 550;
    color: rgba(0, 0, 0, 0.700);
    color: whitesmoke;
    padding: 15px 8px;
    &.active, &:hover{
        lor: #45fdeed5 !important;
        text-shadow: 1px 1px 8px rgb(179, 165, 139);
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.219);
        background-color: rgba(117, 101, 101, 0.445);
    }
`
const Title = styled.h1`
    font-size: 20px;
    margin: 0 5px;
`

const Header = () => {
    return (
        <Wrapper>
            <Title> Pizzeria TOP
                <FontAwesomeIcon icon={faPizzaSlice} />
            </Title>
            <Link to='/restaurant-page-react/Inicio'>Inicio</Link>
            <Link to='/restaurant-page-react/Menu'>Menu</Link>
            <Link to='/restaurant-page-react/Contacto'>Contacto</Link>
            <Link to='/restaurant-page-react/Acerca'>Acerca</Link>
        </Wrapper>
    )
}

export default Header;