import React, { useState } from 'react'

function CadastroUsuario(props) {
    const { handleCadastro } = props;

    const [inputNome, setInput] = useState([]);
    const [inputEmail, setInputEmail] = useState([])

    const handleInputNome = (e) => {
        setInput(e.target.value)
    }
    // console.log(handleInputNome)

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    // console.log(handleInputEmail)
    return (
        <div>
            <header>
                <h1>Cadastro de Usuário</h1>
            </header>
            <main>
                <form action="">
                    <input
                        type="text"
                        value={inputNome}
                        onChange={handleInputNome}
                        placeholder={'Nome'}
                    />
                    <input
                        type="text"
                        value={inputEmail}
                        onChange={handleInputEmail}
                        placeholder={'email'} />
                    <button>Adicionar</button>
                </form>
            </main>
            <div>
                <button onClick={handleCadastro}>Trocar tela</button>
            </div>

        </div>
    )
}

export default CadastroUsuario;