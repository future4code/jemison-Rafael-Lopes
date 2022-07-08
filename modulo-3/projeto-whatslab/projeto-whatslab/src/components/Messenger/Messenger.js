import React, { useState } from "react";
import { useState } from "react";

function Messenger() {

    // Estados
    const [inputNome, setInputNome] = useState ("");
    const [inputMensagem, setInputMensagem] = useState ("");

    // Eventos
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