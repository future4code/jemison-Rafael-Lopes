import React, { useState } from "react";
import { ContainerForm, Form, Input, LabelForm, SubmitButton, TitleGap, TitleHeader } from "./style";


export function Etapa2({ mudaPagina }) {

    const [curso, setCurso] = useState("")
    const [unidadeDeEnsino, setUnidadeDeEnsino] = useState("")


    function handleCurso(event) {
        setCurso(event.target.value)
    }

    function handleUnidadeDeEnsino(event) {
        setUnidadeDeEnsino(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina("4")
    }

    return (
        <ContainerForm>
            <TitleHeader>Etapa 2</TitleHeader>

            <Form onSubmit={handleSubmit}>
                <LabelForm><TitleGap>Qual o curso?</TitleGap><br />
                    <Input type="text" value={curso} onChange={handleCurso} />
                </LabelForm>

                <LabelForm><TitleGap>Qual unidade de ensino?</TitleGap><br />
                    <Input type="text" value={unidadeDeEnsino} onChange={handleUnidadeDeEnsino} />
                </LabelForm>
                <SubmitButton type="submit" value="Próxima Página" />
            </Form>
        </ContainerForm>

    )
}