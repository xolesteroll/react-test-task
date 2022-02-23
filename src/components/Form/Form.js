import React from 'react';
import {useFormik} from "formik";
import FormValidationSchema from "../../helpers/validators/FormValidationSchema";

import s from './Form.module.css'

const Form = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone_no: '',
            imgFiles: [],
            pdfFiles: []
        },
        validationSchema: FormValidationSchema,
        onSubmit: values => {
            console.log(JSON.stringify(values))
        },
        validateOnBlur: true
    })

    const formFieldClasses = (fieldName) => formik.errors[fieldName] && formik.touched[fieldName] ?
        `${s.formField} ${s.invalid}` :
        s.formField

    return (
        <form className={s.form} onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                name="firstName"
                className={formFieldClasses('firstName')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
            />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                name="lastName"
                className={formFieldClasses('lastName')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                className={formFieldClasses('email')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            <label htmlFor="phone_no">Phone Number</label>
            <input
                type="tel"
                id="phone_no"
                name="phone_no"
                placeholder="(123) 123-1234"
                className={formFieldClasses('phone_no')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone_no}
            />
            <label htmlFor="imgFiles">Images</label>
            <input
                type="file"
                id="imgFiles"
                name="imgFiles"
                multiple
                className={formFieldClasses('imgFiles')}
                onChange={event => formik.setFieldValue('imgFiles', [...event.currentTarget.files])}
                onBlur={formik.handleBlur}
            />
            <label htmlFor="pdfFiles">Pdf files</label>
            <input
                type="file"
                id="pdfFiles"
                name="pdfFiles"
                multiple
                className={formFieldClasses('pdfFiles')}
                onChange={event => formik.setFieldValue('pdfFiles', [...event.currentTarget.files])}
                onBlur={formik.handleBlur}
            />
            <button>Submit</button>
        </form>
    );
};

export default Form;
