import { useState, useEffect } from "react";

const Home = () => {
    const [random, setRandom] = useState([])
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/')

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setRandom(json))
    }, [url]) //dependency 
 
    console.log(random);
    
    
    return ( 
        <>
            <button style={{marginTop: '10vh'}} onClick={() => 
                (url === 'https://jsonplaceholder.typicode.com/todos/')?
                setUrl('https://jsonplaceholder.typicode.com/posts/'):
                setUrl('https://jsonplaceholder.typicode.com/todos/')
            }
            >update URL</button>
            <button onClick={() => 
                setUrl('https://jsonplaceholder.typicode.com/todos/?completed=true')
            }
            >
                update endpoint
            </button>
            {random.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>{post.completed}</p>
                </div>
            ))}   
        </>
     );
}
 
export default Home;