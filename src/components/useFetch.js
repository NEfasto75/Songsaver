import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(res => {
                if (!res.ok) { 
                    throw Error('fetch not valid');
                }
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setData(data);
                setError(null);
                
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })


    }, [url,data])

    return { data, isPending, error };
}

export default useFetch;