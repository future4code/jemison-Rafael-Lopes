import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';

function ListaDeUsuarios(props) {

    // Variáveis da API
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    const serviceHeaders = {
        headers: {
            Authorization: 'rafael-lopes-jemison'
        }
    };
    // Requisição GET
    getAllUsers = () => {
        axios.get(url, serviceHeaders)
            .then((response) => {
                alert('Usuário cadastrado com sucesso!')
                getAllUsers()
            }).catch((error) => {
                alert('Algo errado. Tente novamente!')
            })
    }

    // Buscando dados automaticamente utilizando o método de ciclo de vida(lifecycle)
    useEffect(() => {
        getAllUsers()
    }, [])
    const { handleCadastro } = props;

    return (
        <div>
            <h1>Lista de Usuários</h1>
            <button onClick={handleCadastro}>Voltar</button>
        </div>
    )
}

export default ListaDeUsuarios;