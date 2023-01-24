// a hook is just a function
// has to start with use
import {useState, useEffect} from 'react'

// export const cool = 'cool';

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)

            try {
                const res = await fetch(url)
                // console.log(res);
                
                if(!res.ok) {
                    throw new Error(res.status)
                }
                
                const json = await res.json()
    
                setIsPending(false)
                setData(json)
                setError(null)
            } catch (err) {
                setIsPending(false)
                setError('Could not fetch data')
                // console.log(err.message);
            }
           
        }
    
        fetchData()
    }, [url])

    return { data, isPending, error }
}

export default useFetch; 
//when you export a default value
//you don't import it using curly braces
// you use curly braces when its something inside of it like a const

