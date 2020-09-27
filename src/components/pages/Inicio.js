/** @jsx jsx */
import styled from '@emotion/styled'
import { jsx, css, keyframes } from '@emotion/core'
import PizzaImage from './images/delivery.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'

const BoxAnimation = keyframes`
    0% {
        transform: translateX(-50%) scale(0.7);
        opacity: 0.3;
    }

    100% {
        transform: translateX(0%) scale(1);
        opacity: 1;
    }
`

const Container = styled.div`
    display:grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 800px;
`

const Welcome = styled.div `
    animation : ${BoxAnimation} .7s linear 1 forwards;
    height: 60%;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    @media screen and (max-width:768px){
        width:300px
    }
`

const TitleWelcome = styled.h1`
    text-align: center;
    font-family: 'Rowdies', cursive;
    color:whitesmoke;
    font-size:50px;
    text-shadow: 0 0 8px rgb(197, 160, 91);
`

const Delivery = styled.div `
    animation : ${BoxAnimation} .7s linear 1 forwards;
    color: whitesmoke;
    width:80%;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    grid-row-start: 2;
    grid-row-end: 4;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-rows: .6fr 1fr;
    grid-template-columns: 1fr 1fr;
`

const TitleDelivery = styled.h2 `
    font-family: 'Rowdies', cursive;
    color:whitesmoke;
    font-size:30px;
    text-shadow: 0 0 8px rgb(197, 160, 91);
    grid-column: 1/3;
    text-align: center;
`

const Image = styled.img `
    width: 300px;
    height: 90%;
    border-radius: 5px;
    margin: 10px;
    @media screen and (max-width:768px){
        width:100px
    }
`

const SocialContainer = styled.div `
    align-self: stretch;
    justify-self: flex-start;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`

const PhoneInfo = styled.div `
    grid-column: 2/3; 
    display:flex;
    align-items:center;
`

const DirectionInfo = styled.div `
    grid-column: 2/3;
    display:flex;
    align-items:center;
`

const TimeInfo = styled.div `
    display: flex;
    align-items:center;
`

const Inicio = () => {
    return (
        <Container >
            <Welcome>
                <TitleWelcome>Bienvenido a pizzeria TOP</TitleWelcome>
            </Welcome>
            <Delivery>
                <TitleDelivery>Pizzas a Domicilio ¡Pedí Delivery Online!</TitleDelivery>
                <Image src={PizzaImage} alt='Pizza'/>
                <SocialContainer>
                    <PhoneInfo>
                        <FontAwesomeIcon icon={faPhone} css={css`margin-right: 15px;`} />
                        <p>15-33334444</p>
                    </PhoneInfo>
                    <DirectionInfo>
                        <FontAwesomeIcon icon={faMapMarkerAlt} css={css`margin-right: 15px;`} />
                        <p>Av. Siempre viva 123</p>
                    </DirectionInfo>
                    <TimeInfo>
                        <FontAwesomeIcon icon={faClock} css={css`margin-right: 15px;`} />
                        <p>Lun-Vie: 10:00am - 9:00pm</p><p>Sab-Dom: 13:00am - 7:00pm</p>
                    </TimeInfo>
                </SocialContainer>
            </Delivery>
        </Container>
    )
}

export default Inicio;