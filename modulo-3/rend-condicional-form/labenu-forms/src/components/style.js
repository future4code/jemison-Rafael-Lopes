import styled from "styled-components";


export const Container = styled.fieldset`
display: flex;
flex-direction: column;
width:80vw;
margin: 50px auto;
border: 1px solid grey;
background-color: lightgray;
font-family: cursive, Arial, Helvetica, sans-serif;
`

export const Cabecalho = styled.div`
text-align: center;
`

export const Formulario = styled.form`
display: flex;
flex-direction: column;
width: 50vw;
margin: 2em auto;
max-width: 35%;
position: relative;
`
export const Texto = styled.p`
font-size: 1.5em;
`

export const BotaoAvancar = styled.button`
display: flex;
margin: 0 auto;
width: 13vw;
justify-content: center;
`