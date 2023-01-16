import { useState } from "react";
//hooks have to be at the top levl of the component
//have to be in the component to be used

const SongsList = () => {
    const [showSongs, setShowSongs] = useState(true)
    const [songs, setSongs] =  useState([
        {id: 1, title:'title 1'},
        {id: 2, title:'title 2'},
        {id: 3, title:'title 3'},
        {id: 4, title:'title 4'}
    ])

    console.log(showSongs);
    const handleClick = (id) => {
        setSongs((prevSongs) => { //use previous state to not alter state but a copy of it
            return prevSongs.filter((song) => { //returns the array items that pass this condition
                return id !== song.id  //i.e. if the array matches take it out
            })
        })
        console.log(id);
    }


    return ( 
        <section>

            {showSongs && ( //conditional template 
                <div>
                    <button onClick={()=> setShowSongs(false)}>hide songs</button>
                </div>
            )}

            {!showSongs && (
                <div>
                    <button onClick={()=> setShowSongs(true)}>show songs</button>
                </div>
            )}

            <h1>Songs List</h1>
            {showSongs && songs.map((song, index) => ( // conditional template
                <div key={song.id}>
                    <p>{index+1}. {song.title}</p>
                    <button onClick={() => handleClick(song.id)}>delete</button>
                </div>
            ))}

        </section>
     );
}
 
export default SongsList;