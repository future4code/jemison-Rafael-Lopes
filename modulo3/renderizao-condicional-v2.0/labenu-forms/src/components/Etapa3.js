import React, {useState} from "react";


export function Etapa3 ({ mudaPagina }) {

    const [semCurso, setSemCurso] = useState("")
    const [cursoComplementar, setCursoComplementar] = useState("")

    function handleSemCurso (event) {
        setSemCurso(event.target.value)
    }

    function handleCursoComplementar (event) {
        setCursoComplementar(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        mudaPagina("4")
    }
    return(
        <div>
             <h1>Etapa 3</h1>

             <form onSubmit={handleSubmit}>
                <label>Por que você não terminou um curso de graduação?   
                  <input type="text" value={semCurso} onChange={handleSemCurso}/>  
                </label>
                
                <label>Você fez algum curso complementar? 
                    <select value={cursoComplementar} onChange={handleCursoComplementar}>
                        <option value="CT">Curso técnico</option>
                        <option value="CI">Cursos de inglês</option>
                        <option value="Nenhum">Não fiz curso complementar</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
                
             </form>
             
        </div>
       
    )
}