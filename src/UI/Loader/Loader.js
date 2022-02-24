import React from 'react';
import LoaderLayout from "./LoaderLayout/LoaderLayout";
import loader from "../../assets/loader.svg"

const Loader = () => {
    return (
        <LoaderLayout >
            <img src={loader} alt=""/>
        </LoaderLayout>
    );
};

export default Loader;
