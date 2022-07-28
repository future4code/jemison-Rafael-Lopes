import React from 'react'

function ListaDeUsuarios(props) {
    const { handleCadastro } = props;

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <button onClick={handleCadastro}>Trocar tela</button>
        </div>
    )
}

export default ListaDeUsuarios;