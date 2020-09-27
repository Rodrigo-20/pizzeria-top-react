/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import pizzaMuzzarella from './images/pizza-mozzarella.png'
import empanadasDeCarne from './images/empanadas-carne.png'
import pizzaLonga from './images/pizza-longaniza.png'
import pizzaProvenzal from './images/pizza-provenzal.png'
import pizzaBroccoli from './images/pizza-brocoli.png'
import pizzaAnchoas from './images/pizza-anchoas.png'

const menuItems = [
    {
      id: "pizza-mozza",
      imgSrc: pizzaMuzzarella,
      description: "Pizza de mozzarella y albaca",
    },
    {
      id: "emp-carne",
      imgSrc: empanadasDeCarne,
      description: "Empanadas de carne",
    },
    {
      id: "pizza-longa",
      imgSrc: pizzaLonga,
      description: "Pizza de mozzarella y longaniza",
    },
    {
      id: "pizza-provenzal",
      imgSrc: pizzaProvenzal,
      description: "Pizza de provenzal",
    },
    {
      id: "pizza-brocoli",
      imgSrc: pizzaBroccoli,
      description: "Pizza de brocoli",
    },
    {
      id: "pizza-anchoas",
      imgSrc: pizzaAnchoas,
      description: "Pizza de anchoas",
    },
];

const MainContainer = styled.div `
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
    gap: 15px;
    min-height: 800px;
    margin: 5px auto;
    align-items: center;
    justify-content: center;
`

const Container = styled.div `
    padding: 5px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    width: 100%;
    height: 100%;
    min-height:250px;
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
    grid-template-rows: 2fr 1fr;
    color: whitesmoke;
    justify-items: center;
    align-items: center;
    font-size: 15px;
    box-sizing: border-box;
`

const Image = styled.img `
    align-self: flex-start;
    grid-column: 1/4;
    border-radius: 5px;
    width: 100%;
    height: 100%;
`

const Description = styled.p `
    text-align: center;
    grid-column: 1/4;
`

const Carta = (props) => {
    return (
        <Container>
            <Image src={props.src} alt='pizzas' />
            <Description> {props.description} </Description>
        </Container>
    )
}

const Menu = () => {
    return (
        <MainContainer>
            {menuItems.map( (item) => (
                <Carta key={item.id} src={item.imgSrc} description= {item.description} />
            ))}
        </MainContainer>
    )
}

export default Menu;