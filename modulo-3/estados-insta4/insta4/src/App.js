import React from 'react';
import Post from './components/Post/Post';
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 90px auto;
`
function App() {

  return (
    <MainContainer>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'} />

      <Post
        nomeUsuario={'rafael'}
        fotoUsuario={'https://picsum.photos/50/40'}
        fotoPost={'https://picsum.photos/200/160'} />

      <Post
        nomeUsuario={'rodolpho'}
        fotoUsuario={'https://picsum.photos/50/30'}
        fotoPost={'https://picsum.photos/200/170'} />
    </MainContainer>
  )
}





export default App;