import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./NavBar.module.css"
import logo from "../../LogoRick&Morty.svg"

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <NavLink to="/">
                <img src={logo} alt="logo" className={styles.logo}/>
            </NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
        </nav>
    )
}
