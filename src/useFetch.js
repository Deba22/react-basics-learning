import { useState, useEffect } from 'react';

const useFetch = (url) => {
    //The useState hook causes the component to render everytime its state changes
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    //The useEffect hook fires everytime when the component renders
    //The useEffect hook fires the below function on:
    //1. Initial load of the component
    //2. Everytime the component renders
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.Name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        return () => abortCont.abort();
    }, [url])

    return { data, isPending, error }
}

export default useFetch;