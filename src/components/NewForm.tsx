import { useState, useRef } from "react";

const newForm = ({addSong}) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    // const title = useRef()
    // const date = useRef()

    // const handleChange = (e:any) => {
    //     setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle('')
        setDate('')
        // date.current.value = ''
        // title.current.value = ''
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(title, date);
        
        const song = {
            title: title,
            date:date,
            id: Math.floor(Math.random()*10000000)
        }

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
            <button>Submit</button>
            
        </form>
     );
}
 
export default newForm;