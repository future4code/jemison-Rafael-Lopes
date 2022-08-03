import React from 'react'
import { Cabecalho, Container, Formulario } from './style'

function SegundaEtapa() {
  return (

    <Container>
      <Cabecalho>
        <h1>Informações do Ensino Superior</h1>
      </Cabecalho>
      <Formulario>
        <label for='tipo-de-curso'>5. Qual o curso?</label>
        <input name='tipo-de-curso' type='text' />
        <label for='unidade-de-ensino'>6. Qual a Unidade de Ensino?</label>
        <input name='unidade-de-ensino' type='text' />
      </Formulario>
    </Container>


  )
}

export default SegundaEtapa