import { useState } from 'react'

function useApplicationForm(initial) {

    const [formData, setFormData] = useState({initial})

  const onChange=(event)=>{
    const[name, value] = event.target
    setFormData({...formData, [name]:value})
  }
  return [formData, onChange]
}

export default useApplicationForm