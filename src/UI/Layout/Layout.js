import React from 'react';
import Header from "../../components/Header/Header";

import s from './Layout.module.css'

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className={s.layoutDialog}>
                {children}
            </div>
        </>
    );
};

export default Layout;
