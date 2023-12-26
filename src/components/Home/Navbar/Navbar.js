import { useState } from "react";
import Container from "../../GlobalComponents/Container";

import Menu from "./Menu";

const Navbar = () => {
  const [openMenu, setopenMenu] = useState(false);

  return (
    <nav>
      <Container>
        <Menu openMenu={openMenu} />
      </Container>
    </nav>
  );
};

export default Navbar;
