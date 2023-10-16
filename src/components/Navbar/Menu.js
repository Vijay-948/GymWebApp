import { useState } from 'react';
import MainMenu from './MainMenu.css';


const Menu = () => (


    <div MainMenu={MainMenu}>
        <a href="$home">home</a>
        <a href="$about">About</a>
        <a href="$gallery">Gallery</a>
        <a href="$schedule">Schedule</a>
        <a href="$blog">Blog</a>
        <a href="$pricing">Pricing</a>
        <a href="$classes">Classes</a>
        <a href="$contact">Contact</a>

    </div>
    
)

export default Menu;