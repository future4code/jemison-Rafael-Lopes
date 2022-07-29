import React from 'react'
import { Cabecalho, Container, Formulario } from './style'

function TerceiraEtapa() {
  return (
    
    <Container>
    <Cabecalho>
      <h1>Informações Gerais de Ensino</h1>
      </Cabecalho>
      <Formulario>
        <label form='informacoes-de-ensino'>5. Por que você não terminou um curso de graduação</label>
        <input name='informacoes-de-ensino' type='text' required />
        <label>6. Você fez algum curso complementar?</label>
        <select>
          <option value=''>(Escolha uma opção)</option>
          <option value='1'>Curso Técnico</option>
          <option value='2'>Curso de Inglês</option>
          <option value='3'>Não fiz curso complementar</option>
        </select>
      </Formulario>
    </Container>
  )
}

export default TerceiraEtapa