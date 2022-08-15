import { useEffect, useState } from 'react';
import axios from 'axios';

function UseRequestData(url) {

    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data)
            }).catch((error) => {
                setIsLoading(false)
                console.log(error)
                setError(error)
            })
    }, [url])

    return [data, isLoading, error]

}

export default UseRequestData;