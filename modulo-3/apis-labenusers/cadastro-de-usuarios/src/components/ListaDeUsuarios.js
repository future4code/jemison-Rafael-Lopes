import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';

function ListaDeUsuarios(props) {
    const { handleCadastro } = props;
    // Estado inicial
    const [listaDeUsuarios, setListaDeUsuarios] = useState([]);

    const deletarUsuario =(id)=>{
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id')
        setListaDeUsuarios(listaDeUsuarios.filter(usuario=>usuario._id !==id))
    }

    // Componetização da lista
    const todosUsuarios = listaDeUsuarios.map((usuario, index) => {
        return (
            <div key={index}>
                <li>
                    {usuario.name}
                    <button onClick={()=>deletarUsuario(usuario._id)}>x</button>
                </li>
            </div>
        )
    });

    // Buscando dados automaticamente utilizando o método de ciclo de vida(lifecycle)
    useEffect(() => {
        getAllUsers()
    }, [])

    // Variáveis da API
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    const serviceHeaders = {
        headers: {
            Authorization: 'rafael-lopes-jemison'
        }
    };
    // Requisição GET
    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
            .then((response) => { setListaDeUsuarios(response.data) })
            .catch((error) => { console.log(error.response) })
    }


    return (
        <div>
            <h1>Lista de Usuários</h1>
            <ol>
                {todosUsuarios}
            </ol>
            <button onClick={handleCadastro}>Voltar</button>
        </div>
    )
}

export default ListaDeUsuarios;