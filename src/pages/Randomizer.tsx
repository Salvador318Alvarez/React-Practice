import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";


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
                    <h2>Randomizer Page is under construction</h2>
                    <Link to='/'>Back to Home Page</Link>
                </Modal> 
            }
            
            <button onClick={handleOpen}>Open Modal</button>
            
        </section>
     );
}
 
export default Randomizer;