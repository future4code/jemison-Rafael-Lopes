import React, { useState } from 'react'
import CadastroUsuario from './CadastroUsuario';
import ListaDeUsuarios from './ListaDeUsuarios';

function Seletor() {
    const [cadastro, setCadastro] = useState(false);

    const trocarTela = () => {
        setCadastro(!cadastro)
    }

    if (cadastro) {
        return <ListaDeUsuarios handleCadastro={trocarTela} />
    } else {
        return <CadastroUsuario handleCadastro={trocarTela} />
    }


}

export default Seletor;