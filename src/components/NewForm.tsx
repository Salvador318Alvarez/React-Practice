import { useState } from "react";

const newForm = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    // const handleChange = (e:any) => {
    //     setTitle(e.target.value)
    // }

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    return ( 
        <form className="new-form">
            <label>
                <span>Title:</span>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                <span>Date:</span>
                <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>
            </label>
            <button>Submit</button>
            <p>Title: {title}</p>
            <p>Date: {date}</p>
            <p onClick={resetForm}>reset the from</p>
        </form>
     );
}
 
export default newForm;