import React from 'react';
import {useFormik} from "formik";
import FormValidationSchema from "../../helpers/validators/FormValidationSchema";

import s from './Form.module.css'
import MyInput from "../MyInput/MyInput";

const Form = ({changeFetchingState}) => {

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
        onSubmit: async values => {
            changeFetchingState(true)
            try {
                const formData = new FormData()
                formData.append('firstName', values.firstName)
                formData.append('lastName', values.lastName)
                formData.append('email', values.email)
                formData.append('phone_no', values.phone_no)
                formData.append('imgFiles', values.imgFiles)
                formData.append('pdfFiles', values.pdfFiles)

                const response = await fetch('http://test.com', {
                    method: 'POST',
                    body: formData
                })
                console.log(response)
            } catch (e) {
                console.log(e.message)
            }
            changeFetchingState(false)
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
            <label htmlFor="imgFiles">Images</label>
            {(formik.errors.imgFiles && formik.touched.imgFiles) &&
            <p className={s.formErrorNotice}>{formik.errors.imgFiles}</p>
            }
            <input
                type="file"
                name="imgFiles"
                className={formFieldClasses('imgFiles')}
                onChange={event => formik.setFieldValue('imgFiles', [...event.currentTarget.files])}
                onBlur={formik.handleBlur}
                multiple
            />
            <label htmlFor="pdfFiles">PDFs</label>
            {(formik.errors.pdfFiles && formik.touched.pdfFiles) &&
            <p className={s.formErrorNotice}>{formik.errors.pdfFiles}</p>
            }
            <input
                type="file"
                name="pdfFiles"
                className={formFieldClasses('pdfFiles')}
                onChange={event => formik.setFieldValue('pdfFiles', [...event.currentTarget.files])}
                onBlur={formik.handleBlur}
                multiple
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
