import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAddPlay, ButtonDeletePlay, Display, FormPlay, IconePlay, ItemPlayList } from "../styled";

function Playlist() {
    // PASSO 1: CRIAR OS ESTADOS DA PLAYLIST
    const [playlists, setPlaylists] = useState([]);
    // PASSO 8: CRIAÇÃO DO ESTADO DO INPUT
    const [input, setInput] = useState("");

    // PASSO 9: CRIAÇÃO DO HANDLE PARA CUIDAR DO INPUT
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    // PASSO 2: COMPONENTIZAR OS ITENS DA LISTA
    const allPlaylist = playlists.map((playlist, index) => {
        return (
            <ItemPlayList key={index}>
                <IconePlay src='https://cdn-icons-png.flaticon.com/512/7324/7324690.png' />
                {playlist.name}
            </ItemPlayList>
        )
    })

    // PASSO 5: PASSAR O USEEFFECT COM A REQUISIÇÃO GET
        // PARA RENDERIZAR NA TELA AUTOMATICAMENTE
    useEffect(() => {
        getAllPlaylists()
    }, [])


    // PASSO 3: CRIAÇÃO DAS VARIÁVEIS DA MINHA API
        // QUE ESTARÃO PRESENTES EM TODAS AS REQUISIÇÕES
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const serviceHeaders = {
        headers: {
            Authorization: 'rafael-lopes-jemison'
        }
    }

    // PASSO 4: CRIAÇÃO DA REQUISIÇÃO GET
    const getAllPlaylists = () => {
        axios.get(url, serviceHeaders)
        .then((response) => { setPlaylists(response.data.result.list) })
        .catch((error) => { console.log(error.response) })
    }

    // PASSO 10: CRIAÇÃO DA REQUISIÇÃO POST
    const body = {
        "name": input
    }

    const postPlaylist = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Playlist cadastrada com sucesso!")
            getAllPlaylists()
        }).catch((error) => {
            alert("Tente novamente :(")
        })

        setInput("")
    }

    // PASSO 11: CRIAÇÃO DA REQUISIÇÃO DELETE
    const deletePlaylist = (e) => {
        e.preventDefault();

        const delPlaylist = playlists.filter((playlist) => playlist.name === input)

        axios.delete(url + "/" + delPlaylist[0].id, serviceHeaders)
        .then((response) => {
            alert("Playlist deletada com sucesso!")
            getAllPlaylists();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setInput("")
    }

    return (
        <Display>
            {/* PASSO 6: RENDERIZAR ISSO NA TELA */}
            <ul>
                {allPlaylist}
            </ul>
            {/* PASSO 7: CRIAÇÃO DE UM FORMULÁRIO */}
            <FormPlay>
                <input type="text" value={input} onChange={handleInput} />
                <ButtonAddPlay onClick={postPlaylist}>
                    Adicionar
                </ButtonAddPlay>
                <ButtonDeletePlay onClick={deletePlaylist}>
                    Excluir
                </ButtonDeletePlay>
            </FormPlay>
        </Display>
    )
}

export default Playlist;