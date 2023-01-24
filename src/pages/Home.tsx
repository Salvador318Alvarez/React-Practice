import { useState } from "react";
import useFetch from '../hooks/useFetch'
// import { cool } from "../hooks/useFetch";

const Home = () => {
    const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos/')
    const { data:random, isPending, error } = useFetch(url)

    // console.log(cool);
    
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

            <h3>Posts</h3>
            <hr/>

            {isPending && <h3>Loading Posts...</h3>}
            {error && <h3>{error}</h3>}

            {random && random.map(post => ( //only if have a value
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