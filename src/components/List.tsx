const List = ({songs, handleClick}) => {
    return ( 
        <>
       {songs.map((song, index) => ( // conditional template
                <div key={song.id}>
                    <p>{index+1}. {song.title}</p>
                    <p>{song.date}</p>
                    <button 
                        onClick={() => handleClick(song.id)}
                        >delete</button>
                </div>
        ))}
        </>
     );
}
 
export default List;