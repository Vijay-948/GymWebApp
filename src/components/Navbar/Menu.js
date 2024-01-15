
import './Menu.css';
import React from 'react'


const Menu = ({ openMenu }) => (
 
  <div className={openMenu ? "menu" : "hidden"}>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#pricing">Pricing</a>
    <a href="#blog">Blog</a>
    <a href="#contact">Contact</a>
  </div>
 
);

export default Menu;