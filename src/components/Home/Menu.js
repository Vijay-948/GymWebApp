

const Menu = ({ openMenu }) => {
  <div style={menuStyle} className={openMenu ? "menu" : "hidden"}>
    <a href="#Home">Home</a>
    <a href="#about">About</a>
    <a href="#Gallery">Gallery</a>
    <a href="#blog">Blog</a>
    <a href="#pricing">Pricing</a>
    <a href="#contact">Contact</a>
  </div>
};

const menuStyle = {
  backgroundColor: 'red',
  color: 'orange'
}


export default Menu;
