import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/10'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'rafael'}
            fotoUsuario={'https://picsum.photos/20/50'}
            fotoPost={'https://picsum.photos/200/130'}
          />
           <Post
            nomeUsuario={'rodolpho'}
            fotoUsuario={'https://picsum.photos/30/50'}
            fotoPost={'https://picsum.photos/190/110'}
          />
        </MainContainer>
)

}


export default App;
