import React, {useState} from 'react';
import Form from "../../components/Form/Form";
import Loader from "../../UI/Loader/Loader";

const FormPage = () => {
    const [isFetching, setIsFetching] = useState(false)

    return (
        <>
            {isFetching && <Loader/>}
            <Form fetchingState={isFetching} changeFetchingState={setIsFetching}/>
        </>
    );

};

export default FormPage;
