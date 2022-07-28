import React from 'react'

function ListaDeUsuarios(props) {
    const { handleCadastro } = props;

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <button onClick={handleCadastro}>Voltar</button>
        </div>
    )
}

export default ListaDeUsuarios;