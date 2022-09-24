import React, { useState } from "react";


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
        <div>
            <h1>Etapa 2</h1>

            <form onSubmit={handleSubmit}>
                <label>Qual o curso?
                    <input type="text" value={curso} onChange={handleCurso} />
                </label>

                <label>Qual unidade de ensino?
                    <input type="text" value={unidadeDeEnsino} onChange={handleUnidadeDeEnsino} />
                </label>

                <input type="submit" value="Próxima Página" />

            </form>

        </div>

    )
}