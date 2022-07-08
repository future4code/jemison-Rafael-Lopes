import React from "react";

function Messenger() {
    return (
        <section>
            <form>
                <input name="usuario" placeholder="Usuário"></input>
                <input name="mensagem" placeholder="Escreva uma mensagem"></input>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Messenger;