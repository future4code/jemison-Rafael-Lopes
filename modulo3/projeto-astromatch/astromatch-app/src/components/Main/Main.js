import React from 'react'


function Main(props) {

 

  return (
    <div>
    <button onClick={()=> props.switchScreen("list")} >Matchlist</button>
      <h2>Main (cards)</h2>
      <button>Discard</button>
      <button>Clear</button>
      <button>Match</button>
    </div>
    
  )
}

export default Main;