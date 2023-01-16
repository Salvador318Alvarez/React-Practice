import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
    <nav>
        <h1><Link to='/'>Practice</Link></h1>
        <ul>
          <li>
            <Link to='/List'>List</Link>
          </li>
          <li>
            <Link to='/Randomizer'>Randomizer</Link>
          </li>
          <li>
            <Link to='/History'>History</Link>
          </li>
        </ul>
    </nav>
     );
}
 
export default NavBar;