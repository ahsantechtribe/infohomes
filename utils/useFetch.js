import { useState, useEffect } from 'react';
import API from './axios';

function useFetch(selection, setData) {
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const currentSelection = selection[selection.length - 1];
        console.log("Current Request Object ");
        console.log(currentSelection);


        // const requestData = {
        //     // barrio: currentSelection?.neighbourhood,
        //     comunidad: currentSelection?.community,
        //     // ciudad: currentSelection?.city,
        //     // pmin: 5000,
        //     // pmax: 2000000,
        //     // op: 1,
        //     // sortBy: 'estimated_discount',
        // };

        // console.log(requestData);

        const fetchData = async () => {

            try {
                const response = await API.get('', {
                    headers: { "Authorization": `Bearer ${process.env.token}` },
                    params: currentSelection
                });
                console.log(response.data.data);
                setData(prev => [...prev, response.data.data])

            } catch (err) {
                setError(err);
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [selection]);

    return { isLoading, error };
}

export default useFetch;
