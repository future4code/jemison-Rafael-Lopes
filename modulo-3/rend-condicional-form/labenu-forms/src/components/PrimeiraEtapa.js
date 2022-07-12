import React from 'react'


function Etapa1() {
  return (
    <>
      <h1>Dados Gerais</h1>
      <p>Preencha os dados solicitados abaixo.</p>
      <section>
        <form>
          <fieldset>
            <label for='nome'>1. Qual o seu nome?</label>
            <input name='nome' type='text' placeholder='Nome completo' required />
            <label for='idade'>2. Qual sua idade?</label>
            <input name='idade' type='text' min='18' max='130' placeholder='18' required></input>
            <label for='email'>3. Qual seu email?</label>
            <input name='email' type='email' placeholder='seu@email.com' />
            <section>
              <label for='escolaridade'>4. Qual a sua escolaridade?</label>
              <select name='escolaridade'>
                <option>Ensino fundamental completo</option>
                <option>Ensino médio completo</option>
                <option>Curso superior completo</option>
                <option>Posgraduação</option>
                <option>Mestrado</option>
              </select>
            </section>

          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Etapa1