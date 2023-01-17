import { useState } from "react";
import List from "../components/List";
import Modal from "../components/Modal";
import NewForm from "../components/NewForm";
//hooks have to be at the top levl of the component
//have to be in the component to be used

const SongsList = () => {
    const [showSongs, setShowSongs] = useState(true)
    const [songs, setSongs] =  useState([])
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleOpen = () => {
        setShowModal(true)
    }

    //you can pass in functions as props to affect state!!

    const addSong = (song:any) => {
        setSongs((prevSongs) => {
            return [...prevSongs, song]
        })
        setShowModal(false)
    }

    const handleClick = (id:number) => {
        setSongs((prevSongs) => { //use previous state to not alter state but a copy of it
            return prevSongs.filter((song) => { //returns the array items that pass this condition
                return id !== song.id  //i.e. if the array matches take it out
            })
        })
        console.log(id);
    }


    return ( 
        <section>
            {showModal! && 
                <Modal handleClose={handleClose}>
                    <NewForm addSong={addSong} />
                </Modal> 
            }
            
            <button onClick={handleOpen}>Add New Song</button>
            

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

            <h1 style={{color: showSongs? 'red': 'blue'}}>Songs List</h1>
          
            {showSongs &&
            <List songs={songs} handleClick={handleClick}/>
            }
            
            {/* can use dynamic inline style and class styles */}
        </section>
     );
}
 
export default SongsList;