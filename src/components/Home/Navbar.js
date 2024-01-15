import {useState} from 'react'
import Menu from './Menu';
import Logo from './Logo';
import Button from '../GlobalComponents/Button';



const Navbar = () => {

    const[openMenu, setOpenMenu] = useState(false);

    return (
        <nav  >
            <Logo />
            <Menu openMenu={openMenu} />
            <Button text="Join us" />
            <i onClick={() => setOpenMenu(!openMenu)}
            id = "burgermenu"
            className={
                openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
              }
            ></i>
            
        </nav>
    )

}

       



export default Navbar