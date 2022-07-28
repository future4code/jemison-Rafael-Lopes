import React from 'react'

function CadastroUsuario(props) {
    const {handleCadastro} = props;

    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            <button onClick={handleCadastro}>Trocar tela</button>
        </div>
    )
}

export default CadastroUsuario;