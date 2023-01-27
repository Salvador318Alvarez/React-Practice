import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
    <nav>
        <h1><NavLink to='/'>Practice</NavLink></h1>
        <ul>
          <li>
            <NavLink to='/List'>List</NavLink>
          </li>
          <li>
            <NavLink to='/Randomizer'>Randomizer</NavLink>
          </li>
          <li>
            <NavLink to='/History'>History</NavLink>
          </li>
        </ul>
    </nav>
     );
}
 
export default NavBar;