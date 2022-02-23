import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

import s from "./HeaderNav.module.css"

const HeaderNav = ({currentUrl}) => {

    const classNames = ({isActive}) => isActive ? `${s.navLink} ${s.active}` : s.navLink
    const initialLoadClassNames = ({isActive}) => isActive || (currentUrl === '/form' || currentUrl === '/')  ? `${s.navLink} ${s.active}` : s.navLink

    return (
        <nav>
            <ul className={s.navList}>
                <li><NavLink className={initialLoadClassNames} to="/form">Form</NavLink> </li>
                <li><NavLink className={classNames} to="/calendar">Calendar</NavLink></li>
            </ul>
        </nav>
    );
};

export default HeaderNav;
