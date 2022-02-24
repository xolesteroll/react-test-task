import React from 'react';

import s from './LoaderLayout.module.css'

const LoaderLayout = ({children}) => {
    return (
        <div className={s.loaderLayout}>
            {children}
        </div>
    );
};

export default LoaderLayout;
