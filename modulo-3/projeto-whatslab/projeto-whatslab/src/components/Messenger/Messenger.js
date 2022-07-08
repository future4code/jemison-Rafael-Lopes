import React, { useState } from "react";
import { useState } from "react";

function Messenger() {

    // Estados
    const [inputNome, setInputNome] = useState ("");
    const [inputMensagem, setInputMensagem] = useState ("");

    // Eventos
    const handleInputNome = (event) =>{
        setInputNome(event.target.value)
    }

    const handleInputMensagem = (event) =>{
        setInputMensagem(event.target.value)
    }

    // Adicionar Mensagem
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