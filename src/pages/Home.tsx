import { useState, useEffect } from "react";

const Home = () => {
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .then(json => setRandom(json))
    }, [])
 
    console.log(random);
    
    
    return ( 
        <>
            {random.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}   
        </>
     );
}
 
export default Home;