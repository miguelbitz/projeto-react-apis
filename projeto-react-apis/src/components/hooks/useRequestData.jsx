import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data);
            })
            .catch((error) => {
                setIsLoading(false)
                setError(false)
                console.log(error.response.data);
            });
    }, [url]);


    return [data, isLoading, error]
}