import React, { useState } from "react";
import { ContainerForm, Form, Input, LabelForm, SelectOption, SubmitButton, TitleGap, TitleHeader } from "./style";


export function Etapa3({ mudaPagina }) {

    const [semCurso, setSemCurso] = useState("")
    const [cursoComplementar, setCursoComplementar] = useState("")

    function handleSemCurso(event) {
        setSemCurso(event.target.value)
    }

    function handleCursoComplementar(event) {
        setCursoComplementar(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        mudaPagina("4")
    }
    return (
        <ContainerForm>
            <TitleHeader>Etapa 3</TitleHeader>
            <Form onSubmit={handleSubmit}>
                <LabelForm><TitleGap>Por que você não terminou um curso de graduação?</TitleGap><br />
                    <br />

                    <Input type="text" value={semCurso} onChange={handleSemCurso} />
                </LabelForm>

                <LabelForm><TitleGap>Você fez algum curso complementar?</TitleGap><br />
                    <br />
                    <SelectOption value={cursoComplementar} onChange={handleCursoComplementar}>
                        <option value="CT">Curso técnico</option>
                        <option value="CI">Cursos de inglês</option>
                        <option value="Nenhum">Não fiz curso complementar</option>
                    </SelectOption>
                </LabelForm>
                <SubmitButton type="submit" value="Próxima Página" />
            </Form>

        </ContainerForm>

    )
}