import { useState, useRef } from "react";

const newForm = ({addSong}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('psalms')
    // const title = useRef()
    // const date = useRef()

    // const handleChange = (e:any) => {
    //     setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle('')
        setDate('')
        setType('psalms')
        // date.current.value = ''
        // title.current.value = ''
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(title, date);
        
        const song = {
            title: title,
            date:date,
            type: type,
            id: Math.floor(Math.random()*10000000)
        }

        console.log(event);
        
        addSong(song);
        resetForm()
        
    }

    return ( 
        <form className="new-form" onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input 
                    required
                    type="text"
                    // ref={title} 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </label>
            <label>
                <span>Date:</span>
                <input 
                    required
                    type="date" 
                    // ref={date}
                    value={date} 
                    // this is known as controlled inputs
                    onChange={(e) => setDate(e.target.value)}
                    />
            </label>
            <label>
                <span>Song Type:</span>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="psalms">Psalms</option>
                    <option value="hymns">Hymns</option>
                    <option value="spiritual songs">Spiritual Songs</option>
                </select>
            </label>
            <button>Submit</button>
            
        </form>
     );
}
 
export default newForm;