import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import NewForm from "../components/NewForm";


const Randomizer = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = () => {
        setShowModal(false)
    }

    const handleOpen = () => {
        setShowModal(true)
    }
    //you can pass in functions as props to affect state!!
    console.log(showModal);
    

    return ( 
        <section>
       
            <h1> Randomizer</h1>
            {showModal! && 
                <Modal handleClose={handleClose}>
                    <NewForm />
                </Modal> 
            }
            
            <button onClick={handleOpen}>Add New Song</button>
            
        </section>
     );
}
 
export default Randomizer;