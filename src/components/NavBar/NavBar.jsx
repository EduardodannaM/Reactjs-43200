import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="containerNavBar">
      <img
        src="https://res.cloudinary.com/dmczguof4/image/upload/v1677375257/LogoLitta_jtvbvy.png"
        alt="logo de mi tienda"
      />
      <ul className="containerMenuList">
        <li>
          <a href="Navbar">
            <h2>Lentes de Sol</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes RayBan</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes Oakley</h2>
          </a>
        </li>
        <li>
          <a href="Navbar">
            <h2>Lentes Costa</h2>
          </a>
        </li>
      </ul>
      <CartWidget />;
    </div>
  );
};

export default NavBar;
