import * as Yup from 'yup';

const FormValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'First Name is to short(2 symbols min)')
        .max(15, 'First Name is too long(15 symbols max)')
        .required('This field is required'),
    lastName: Yup.string()
        .min(2, 'First Name is to short(2 symbols min)')
        .max(15, 'First Name is too long(15 symbols max)')
        .required('This field is required'),
    email: Yup.string()
        .email('Invalid Email')
        .required('This field is required'),
    phone_no: Yup.string()
        .matches(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, 'Phone number is not valid, example: (123) 123-1234' )
        .required('Please enter your phone'),
})


export default FormValidationSchema
