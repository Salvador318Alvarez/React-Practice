import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const History = () => {
    return ( 
        <section>
            <h1>History Page</h1>
            <Modal>
                <h2>History Page is under contruction</h2>
                <Link to='/'>Back to Home Page</Link>
            </Modal>
        </section>
     );
}
 
export default History;