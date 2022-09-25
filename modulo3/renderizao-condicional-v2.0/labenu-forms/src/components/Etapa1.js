import React, { useState } from "react";
import { ContainerForm, Form, Input, LabelForm, SelectOption, SubmitButton, TitleGap, TitleHeader } from "./style";


export function Etapa1({ mudaPagina }) {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    const [educacao, setEducacao] = useState("3")


    function handleNome(event) {
        setNome(event.target.value)
    }

    function handleIdade(event) {
        setIdade(event.target.value)
    }

    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleEducacao(event) {
        setEducacao(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina(educacao)
    }

    return (
        <ContainerForm>
            <TitleHeader>Etapa 1</TitleHeader>
            <h1>Informações Gerais</h1>

            <Form onSubmit={handleSubmit}>
                <LabelForm><TitleGap>Nome:</TitleGap>
                    <Input type="text" value={nome} onChange={handleNome} />
                </LabelForm>

                <LabelForm><TitleGap>Idade:</TitleGap>
                    <Input type="number" value={idade} onChange={handleIdade} />
                </LabelForm>

                <LabelForm><TitleGap>Email:</TitleGap>
                    <Input type="text" value={email} onChange={handleEmail} />
                </LabelForm>

                <TitleGap><p>Selecione a sua formação atual</p></TitleGap>

                <SelectOption value={educacao} onChange={handleEducacao}>
                    <option value="3">Ensino Médio Incompleto</option>
                    <option value="3">Ensino Médio Completo</option>
                    <option value="2">Ensino Superior Incompleto</option>
                    <option value="2">Ensino Superior Completo</option>
                </SelectOption>

                <SubmitButton type="submit" value="Próxima Página" />
            </Form>
        </ContainerForm>

    )
}