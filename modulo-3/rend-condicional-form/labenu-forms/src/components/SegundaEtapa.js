import React from 'react'

function SegundaEtapa() {
  return (

    <fieldset>
      <h1>Informações do Ensino Superior</h1>
      <form>
        <label for='tipo-de-curso'>5. Qual o curso?</label>
        <input name='tipo-de-curso' type='text' />
        <label for='unidade-de-ensino'>6. Qual a Unidade de Ensino?</label>
        <input name='unidade-de-ensino' type='text' />
      </form>
    </fieldset>


  )
}

export default SegundaEtapa