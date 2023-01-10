import {Link} from 'react-router-dom';

const NavItem = ({nav, children}) => <li><Link to={nav}>{children}</Link></li>

export default NavItem;