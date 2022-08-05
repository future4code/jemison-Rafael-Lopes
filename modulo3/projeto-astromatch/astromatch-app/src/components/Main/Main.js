import React, { useState } from 'react'


function Main(props) {

  const [perfis, setPerfis] = useState()

  return (
    <div>
      <h2>Main (cards)</h2>
      <button>Discard</button>
      <button>Clear</button>
      <button>Match</button>
    </div>
    
  )
}

export default Main;