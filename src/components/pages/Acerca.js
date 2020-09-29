import React from 'react'
import styled from '@emotion/styled'
import About from "./images/About-us.png"

const Container = styled.div `
    display:grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
    height: 100%;
`

const ImageContainer = styled.div `
    height: 90%;
    width: 600px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    @media screen and (max-width:768px){
        width:320px;
        height: 80%;
    }
`

const Image = styled.img `
    height: 100%;
    width: 600px;
    border-radius: 5px;
    @media screen and (max-width:768px){
        width:320px;
    }
`

const TextContainer = styled.div `
    text-align:center;
    height: 90%;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    grid-row:2/3;
    line-height: 250%;
    @media screen and (max-width:768px){
        line-height: 110%;
    }
`

const Text = styled.p `
    color: whitesmoke;
    font-size: 20px;
`

const Acerca = () => {
    return (
        <Container>
            <ImageContainer>
                <Image src={About} alt='horno pizza'/>
            </ImageContainer>
            <TextContainer>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam a quas aliquid pariatur consequatur veritatis libero ut! Illo, harum explicabo iste at culpa fugit numquam perferendis deleniti, ad doloribus delectus.</Text>
            </TextContainer>
        </Container>
    )
}

export default Acerca;