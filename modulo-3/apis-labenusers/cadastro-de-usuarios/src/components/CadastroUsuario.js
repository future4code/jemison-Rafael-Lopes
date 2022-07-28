import React from 'react'

function CadastroUsuario(props) {
    const {handleLista} = props;

    return (
        <div>
            <h1>Cadastro de Usuário (Login)</h1>
            <button onClick={handleLista}>Trocar tela</button>
        </div>
    )
}

export default CadastroUsuario;