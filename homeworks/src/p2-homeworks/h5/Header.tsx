import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";
import s from './Header.module.css'

function Header() {
    const [show, setShow] = useState(false)


    const classMenu = show ? s.menuAction : s.menu

    return (
        <div className={classMenu}>
            <div className={s.nav}>
                <NavLink className={s.navLink} to={PATH.PRE_JUNIOR}>PreJunior </NavLink>
                <NavLink className={s.navLink} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.navLink} to={PATH.JUNIORPLUS}>Junior+</NavLink>
            </div>
            <div>
                <button className={s.btn}/>
            </div>
        </div>
    )
}

export default Header
