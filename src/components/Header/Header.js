import React from 'react';
import s from './Header.module.css'
import HeaderNav from "./HeaderNav/HeaderNav";
import {useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation()

    return (
        <header className={s.header}>
            <HeaderNav currentUrl={location.pathname} />
        </header>
    );
};

export default Header;
