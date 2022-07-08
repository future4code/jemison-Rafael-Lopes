import React, { useState } from "react";
import { ContainerMessenger } from "./style";

function Messenger() {

    // Estados
    const [inputNome, setInputNome] = useState("");
    const [inputMensagem, setInputMensagem] = useState("");
    const [mensagem, setMensagem] = useState([""])

    // Eventos
    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }

    const handleInputMensagem = (event) => {
        setInputMensagem(event.target.value)
    }

    // Adicionar Mensagem
    const enviarMensagem = () => {

        const novaMensagem = { usuario: inputNome, mensagem: inputMensagem }
        const novaListaDeMensagens = [...mensagem, novaMensagem]
        setMensagem(novaListaDeMensagens)
    }


    return (
        <ContainerMessenger>
            <form>
                <input name="usuario" placeholder="Usuário" value={inputNome} onChange={handleInputNome} />
                <input name="mensagem" placeholder="Escreva uma mensagem" value={inputMensagem} onChange={handleInputMensagem} />
                <button onClick={enviarMensagem} >Enviar</button>
            </form>
        </ContainerMessenger>
    )
}

export default Messenger;