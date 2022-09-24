import React, { useState } from "react";


export function Etapa1 ({ mudaPagina }) {

    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [email, setEmail] = useState("")
    const [educacao, setEducacao] = useState("3")


    function handleNome (event) {
        setNome(event.target.value)
    }

    function handleIdade (event) {
        setIdade(event.target.value)
    }

    function handleEmail (event) {
        setEmail(event.target.value)
    }

    function handleEducacao (event) {
        setEducacao(event.target.value)  
    }

    function handleSubmit (event) {
        event.preventDefault()
        mudaPagina(educacao)
    }

    return(
        <div>
             <h1>Etapa 1</h1>

             <form onSubmit={handleSubmit}>
                <label>Nome:  
                  <input type="text" value={nome} onChange={handleNome}/>  
                </label>
                
                <label>Idade: 
                    <input type="text" value={idade} onChange={handleIdade} />
                </label>
                
                <label>Email: 
                    <input type="text" value={email} onChange={handleEmail}/>
                </label>

                <select value={educacao} onChange={handleEducacao}>
                    <option value="3">Ensino Médio Incompleto</option>
                    <option value="3">Ensino Médio Completo</option>
                    <option value="2">Ensino Superior Incompleto</option>
                    <option value="2">Ensino Superior Completo</option>
                </select>
                
                <input type="submit" value="Enviar" />
                
             </form>
             
        </div>
       
    )
}