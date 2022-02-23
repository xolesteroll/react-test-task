import React, {useState} from 'react';
import {useFormik} from "formik";
import FormValidationSchema from "../../helpers/validators/FormValidationSchema";

import s from './Form.module.css'
import MyInput from "../MyInput/MyInput";

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
            <MyInput
                value={formik.values.firstName}
                type="text"
                name="firstName"
                label="First Name"
                error={(formik.errors.firstName && formik.touched.firstName) ?
                    formik.errors.firstName :
                    null
                }
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
            />
            <MyInput
                value={formik.values.lastName}
                type="text"
                name="lastName"
                label="Last Name"
                error={(formik.errors.lastName && formik.touched.lastName) ?
                    formik.errors.lastName :
                    null
                }
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
            />
            <MyInput
                value={formik.values.email}
                type="email"
                name="email"
                label="Email"
                error={(formik.errors.email && formik.touched.email) ?
                    formik.errors.email :
                    null
                }
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
            />
            <MyInput
                value={formik.values.phone_no}
                type="tel"
                name="phone_no"
                label="Phone number"
                error={(formik.errors.phone_no && formik.touched.phone_no) ?
                    formik.errors.phone_no :
                    null
                }
                onChangeHandler={formik.handleChange}
                onBlurHandler={formik.handleBlur}
                placeholder="(123) 123-1234"
            />
            <MyInput
                type="file"
                name="imgFiles"
                label="Images"
                error={(formik.errors.imgFiles && formik.touched.imgFiles) ?
                    formik.errors.imgFiles :
                    null
                }
                onChangeHandler={event => formik.setFieldValue('imgFiles', [...event.currentTarget.files])}
                onBlurHandler={formik.handleBlur}
                placeholder="(123) 123-1234"
            />
            <MyInput
                type="file"
                name="pdfFiles"
                label="Pdf Files"
                error={(formik.errors.pdfFiles && formik.touched.pdfFiles) ?
                    formik.errors.pdfFiles :
                    null
                }
                onChangeHandler={event => formik.setFieldValue('pdfFiles', [...event.currentTarget.files])}
                onBlurHandler={formik.handleBlur}
                placeholder="(123) 123-1234"
            />
            <button>Submit</button>
        </form>
    );
};

export default Form;
