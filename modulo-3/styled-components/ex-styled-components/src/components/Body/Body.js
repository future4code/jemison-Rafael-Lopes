import React from "react";
import { DivPai } from './style'
import { Colunas } from './style'
import { Input } from './style'

function Body() {
    return (
        <DivPai>
            <Colunas />
            <Input>
                <div>
                    <label for="remetente">Remetente: </label>
                    <input type="text" name="remetente" id="remetente" />
                </div>
                
                <div>
                    <label for="mensagem">Msg: </label>
                    <input type="text" name="mensagem" id="mensagem" />
                    <button>Enviar Mensagem</button>
                </div>
            </Input>
            <Colunas />
        </DivPai>
    );
}

export default Body;