

import { useState } from "react";

import NavLogo from './Logo';

import Menu from './Menu.js'

import container from '../Global/Container'

import Button from '../Global/Button/Button'

import style from './Navbar.css'






const Navbar = () => {

     const [openMenu, setOpenMenu] = useState(false);


    return (
        <nav style={style}>
            <container>
                <NavLogo />
                <Menu />
                <Button text="join us" />
                <i onClick={() => setOpenMenu(!openMenu)}
                id="burgerMenu" className={
                    openMenu ? "fas fa-times fa-lg" : "fas fa-align-right fa-lg"
                }></i>

            </container>
        </nav>
    );

}

export default Navbar;