import React, { useState } from "react";
import { Balao, ContainerMessenger, SubContainer } from "./style";

function Messenger() {

    // Estados
    const [inputNome, setInputNome] = useState("");
    const [inputMensagem, setInputMensagem] = useState("");
    const [mensagens, setMensagens] = useState([])



    // Eventos
    const handleInputNome = (event) => {
        setInputNome(event.target.value)
    }

    const handleInputMensagem = (event) => {
        setInputMensagem(event.target.value)
    }

    const enviarMensagem = (event) => {
        event.preventDefault();

        setMensagens([...mensagens, { nome: inputNome, mensagem: inputMensagem }])
        setInputMensagem("")
        setInputNome("")
    }

    const ListaDeMensagens = mensagens.map((mensagem, index) => {
        return (
            
            <Balao >
            <div key={index}>
                <p>{mensagem.nome}</p>
                <p>{mensagem.mensagem}</p>
                </div>
            </Balao>
        )
    })

    return (
        <ContainerMessenger>
            <form>
                {enviarMensagem}
                {ListaDeMensagens}
                <SubContainer>
                <input name="usuario" placeholder="Usuário" value={inputNome} onChange={handleInputNome} />
                <input name="mensagem" placeholder="Escreva uma mensagem" value={inputMensagem} onChange={handleInputMensagem} />
                <button onClick={enviarMensagem}>Enviar</button>
                </SubContainer>
            </form>
        </ContainerMessenger>
    )
}

export default Messenger;