import styled from "styled-components";


export const Container = styled.fieldset`
display: flex;
flex-direction: column;
width:80vw;
margin: 90px auto;
border: 1px solid grey;
background-color: lightgray;
font-family: cursive, Arial, Helvetica, sans-serif;
`

export const Cabecalho = styled.div`
text-align: center;
margin: 0;
`

export const Formulario = styled.form`
display: flex;
flex-direction: column;
width: 50vw;
margin: 2em auto;
max-width: 35%;
position: relative;

label {
    margin: 0.7em 0;
}
`
export const Texto = styled.p`
font-size: 1.5em;
`

export const Agradecimentos = styled.p`
text-align: center;
font-size: 1.6em;
margin: 0;
`

export const BotaoAvancar = styled.button`
display: flex;
margin: 0 auto;
width: 15vw;
justify-content: center;
`