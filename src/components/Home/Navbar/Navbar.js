import { useState } from "react";
import Container from "../../GlobalComponents/Container";

import Menu from "./Menu";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <nav className="nav">
      <Container className="container">
        <Menu openMenu={openMenu} />
        <i
          onClick={() => setopenMenu(!openMenu)}
          id="burgerMenu"
          className={
            openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
          }
        ></i>
      </Container>
    </nav>
  );
};

export default Navbar;
