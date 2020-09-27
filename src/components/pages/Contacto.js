import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    height: 800px;
    margin: 0 auto;
`

const FormContainer = styled.div `
    justify-self: center;
    align-self: center;
    width: 90%;
    height: 70%;
    grid-column: 2/3;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
`

const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:white;
`

const Button = styled.button `
    justify-self: center;
    align-self: center;
    padding: 20px 20px;
    color: whitesmoke;
    background-color: rgba(0,0,0,1);
    border: 1px solid rgba(41, 40, 40, 0.418);
    font-weight: bold;
    border-radius: 5px;
    &:hover, &:active {
        cursor: pointer;
        background-color: rgba(92, 75, 75, 0.815);
    }
`

const TextArea = styled.textarea `
    resize: none;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    margin: auto;
    padding:4px;
`

const SocialInfoContainer= styled.div `
    height: 60%;
    width: 60%;
    margin:  auto;
    grid-column: 1/2;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    @media screen and (max-width:768px){
        width:100%;
    }
`

const SocialInfo = styled.div `
    margin: 10px;
    color: whitesmoke;
    font-size: 18px;
`

const Label = styled.label `
    display: block;
    border-radius: 5px;
    margin: 0 auto;
    text-align:center;
    width: 80%;
`

const Input = styled.input `
    display: block;
    border-radius: 5px;
    margin: 5px auto;
    width:80%;
    border: 1px solid rgb(118, 118, 118);
    width: 100%;
    padding:5px 0;
`

const Contacto = () => {
    return (
        <Container>
            <FormContainer>
                <Form>
                    <Label htmlFor="name">Nombre*
                        <Input name="name" type="text"/> 
                    </Label>
                    <Label htmlFor="email">E-mail:
                        <Input name="email" type="text"/>
                    </Label>
                    <Label htmlFor="phone">Telefono:
                        <Input name="phone" type="text"/>
                    </Label>
                    <Label htmlFor="comment">Su mensaje
                        <TextArea name="comment" type=""></TextArea>
                    </Label>
                    <Button type="reset">Enviar</Button>
                </Form>
            </FormContainer>
            <SocialInfoContainer>
                <SocialInfo>
                    <h2>Telefono:</h2>
                    <p>15-44443333 / 4222-3344</p>
                </SocialInfo>
                <SocialInfo>
                    <h2>Email:</h2>
                    <p>email@gmail.com</p>
                </SocialInfo>
                <SocialInfo>
                <h2>Estamos en:</h2>
                <p>Pl. Sant Jaume, 3241. Buenos Aires, Argentina</p>
                </SocialInfo>
            </SocialInfoContainer>
        </Container>
    )
}

export default Contacto;