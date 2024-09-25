import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink
            to="/"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeclassname="active"
          >
            <FaIcons.FaHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Sales"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeclassname="active"
          >
            <FaIcons.FaShoppingCart className="me-2" />
            Ventas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Clients"
            className="text-dark rounded py-2 w-100 d-inline-block px-3"
            activeclassname="active"
          >
            <FaIcons.FaUsers className="me-2" />
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
