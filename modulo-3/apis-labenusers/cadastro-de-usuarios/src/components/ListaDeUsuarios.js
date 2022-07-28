import axios from 'axios';
import React from 'react'

function ListaDeUsuarios(props) {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    getAllUsers = ()=>{
        axios.get(url)
    }
    const { handleCadastro } = props;

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <button onClick={handleCadastro}>Voltar</button>
        </div>
    )
}

export default ListaDeUsuarios;