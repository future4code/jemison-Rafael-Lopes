import React from 'react'

function MatchPage(props) {
  return (
    <div>
    <button onClick={()=>props.changeScreen("mainScreen")}>Retornar</button>
    <h1>Astromatch</h1>
    <button>Clear all</button>
    </div>
 
  )
}

export default MatchPage;