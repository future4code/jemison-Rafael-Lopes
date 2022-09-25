import styled from "styled-components";

export const ContainerForm = styled.div`
font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 90vw;
height: 80vh;
margin: 10vh auto;
background-color: #f2f2f2;
border-radius: 6px;
`

export const TitleHeader = styled.header`
display: flex;
font-size: 1.3rem;
font-weight: 600;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
padding: 20px;
`
export const LabelForm = styled.label`
margin: 10px 0;
`

export const TitleGap = styled.span`
margin-right: 10px;
font-size: 1.4rem;
`

export const Input = styled.input`
width: 40vw;
height: 2.9vh;
margin-top: 10px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 80vw;
    height: 4vh;
  }
 
`

export const SelectOption = styled.select`
font-size: 1.2rem;
padding: 5px 0;
`

export const SubmitButton = styled.input`
display: flex;
justify-content: center;
margin: 0 auto;
margin-top: 16px;
width: 60%;
padding: 9px;
background-color:#d8d8d8;
font-size: 1rem;
font-weight: bold;
border: 1px solid lightgrey;
border-radius: 3px;
`
// @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
//    Input
//     }