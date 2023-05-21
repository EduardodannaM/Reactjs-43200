import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dmczguof4/image/upload/v1677375257/LogoLitta_jtvbvy.png"
          alt="logo de mi tienda"
        />
      </Link>
      <ul className="containerMenuList">
        <li>
          <NavLink to={`/categoria/LentesdeSol`}>Lentes de Sol</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/RayBan`}>Lentes RayBan</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/Oakley`}>Lentes Oakley</NavLink>
        </li>
        <li>
          <NavLink to={`/categoria/Costa`}>Lentes Costa</NavLink>
        </li>
      </ul>
      <CartWidget />
    </div>
  );
};
export default NavBar;
