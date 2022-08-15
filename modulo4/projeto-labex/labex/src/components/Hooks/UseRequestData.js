import {useEffect, useState} from 'react';
import axios from 'axios';

function UseRequestData(url) {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then((response)=>{
            setData(response.data)
    }).catch((error)=>{
        console.log(error)
    })}, [url])

  return (
    data
  )
}

export default UseRequestData