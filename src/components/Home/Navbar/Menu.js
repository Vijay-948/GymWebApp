import "./Menu.css";

const Menu = ({ openMenu }) => (
  <div className={openMenu ? "menu" : "hidden"}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#pricing">Pricing</a>
    <a href="#gallery">Gallery</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
  </div>
);

export default Menu;
