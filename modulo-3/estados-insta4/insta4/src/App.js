import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

// const MainContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// `
class App extends React.Component {
  state = {
    usuario: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: <img src='https://picsum.photos/50/50' alt=''></img>,
        fotoPost: <img src='https://picsum.photos/200/150' alt=''></img>
      },
      {
        nomeUsuario: 'rafael',
        fotoUsuario: <img src='https://picsum.photos/50/40' alt=''></img>,
        fotoPost: <img src='https://picsum.photos/200/160' alt=''></img>
      },
      {
        nomeUsuario: 'rodolpho',
        fotoUsuario: <img src='https://picsum.photos/50/30' alt=''></img>,
        fotoPost: <img src='https://picsum.photos/200/170' alt=''></img>
      }
    ]
  }
  render() {
    const listaDeComponentes = this.state.usuario.map((usuario) => {
      return (
        <p>
          {usuario.nomeUsuario}{usuario.fotoUsuario}{usuario.fotoPost}
        </p>
      )
    })

    return (
      <div>
        {listaDeComponentes}
      </div>
    )
  }
}
export default App;