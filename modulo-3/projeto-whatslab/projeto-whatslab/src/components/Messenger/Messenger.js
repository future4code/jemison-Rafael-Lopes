import React, { useState } from "react";
import { useState } from "react";

function Messenger() {

    // Estados
    const [inputNome, setInputNome] = useState("");
    const [inputMensagem, setInputMensagem] = useState("");
    const [usuarios, setUsuarios] = useState([])

    // Eventos
    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }

    const handleInputMensagem = (event) => {
        setInputMensagem(event.target.value)
    }

    // Adicionar Mensagem
    const enviarMensagem = (event) => {
        event.preventDEfault();
    
        const novoUsuario ={usuario: inputNome, mensagem: inputMensagem}
        const novaListaDeUsuario = [...usuarios, novoUsuario]
        setUsuarios(novaListaDeUsuario)
    }


    return (
        <section>
            <form>
                <input name="usuario" placeholder="Usuário" value={inputNome} onChange={handleInputNome} />
                <input name="mensagem" placeholder="Escreva uma mensagem" value={inputMensagem} onChange={handleInputMensagem} />
                <button onClick={enviarMensagem} >Enviar</button>
            </form>
        </section>
    )
}

export default Messenger;