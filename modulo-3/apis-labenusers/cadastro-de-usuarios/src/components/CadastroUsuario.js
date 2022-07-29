import axios from 'axios';
import React, { useState } from 'react'

function CadastroUsuario(props) {
    const { handleCadastro } = props;



    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    const handleInputNome = (e) => {
        setInputNome(e.target.value)
    }
    // console.log(handleInputNome)

    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }
    // console.log(handleInputEmail)

    // Requisição POST


    // Variáveis da API
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: "rafael-lopes-jemison"
        }
    };

    const body = {
        name: inputNome,
        email: inputEmail
    }
    const postUsuario = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
            .then((response) => {
                setInputNome(response.data)
                setInputEmail(response.data)
                alert("Usuário criado com sucesso!")
            })
            .catch((error) => {
                alert("Algo deu errado. Tente novamente!")
            })

    }
console.log(postUsuario)
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
                        placeholder="Nome"
                    />
                    <input
                        type="text"
                        value={inputEmail}
                        onChange={handleInputEmail}
                        placeholder="Email"
                    />
                    <button onClick={()=>postUsuario}>Adicionar</button>
                </form>
            </main>
            <div>
                <button onClick={handleCadastro}>Trocar tela</button>
            </div>

        </div>
    )
}

export default CadastroUsuario;