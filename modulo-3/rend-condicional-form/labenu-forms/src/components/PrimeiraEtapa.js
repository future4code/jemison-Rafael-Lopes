import React from 'react'
import { Cabecalho, Container, Formulario, Texto } from './style'

function Etapa1() {
  return (

    <Container>
      <Cabecalho>
        <h1>Dados Gerais</h1>
      </Cabecalho>
      <Formulario>
        <Texto>Preencha os dados solicitados abaixo.</Texto>
        <label for='nome'>1. Qual o seu nome?</label>
        <input name='nome' type='text' required />
        <label for='idade'>2. Qual sua idade?</label>
        <input name='idade' type='text' min='18' required></input>
        <label for='email'>3. Qual seu email?</label>
        <input name='email' type='email' />
        <section>
          <label for='escolaridade'>4. Qual a sua escolaridade?</label>
          <select name='escolaridade'>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Curso superior Incompleto</option>
            <option>Ensino Médio Completo</option>
          </select>
        </section>
      </Formulario>
    </Container>

  )
}

export default Etapa1