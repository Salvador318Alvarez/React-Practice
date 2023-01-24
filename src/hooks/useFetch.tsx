// a hook is just a function
// has to start with use
import {useState, useEffect} from 'react'

export const cool = 'cool';

const useFetch = (url) => {
    
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
    
        fetchData()
    }, [url])

    return { data }
}

export default useFetch; 
//when you export a default value
//you don't import it using curly braces
// you use curly braces when its something inside of it like a const

