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
            fotoUsuario={'https://picsum.photos/50/20'}
            fotoPost={'https://picsum.photos/200/160'}
          />
           <Post
            nomeUsuario={'Rafael'}
            fotoUsuario={'https://picsum.photos/50/30'}
            fotoPost={'https://picsum.photos/200/180'}
          />
           <Post
            nomeUsuario={'Euriane'}
            fotoUsuario={'https://picsum.photos/80/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>
)

}


export default App;
