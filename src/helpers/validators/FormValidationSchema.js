import * as Yup from 'yup';
import filesValidator from './filesValidator'

Yup.addMethod(Yup.mixed, 'isCorrectFormat', filesValidator)

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
        .matches(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/, 'Incorrect format, example: (123) 123-1234' )
        .required('Please enter your phone'),
    pdfFiles: Yup.mixed()
        .isCorrectFormat('pdf', 'The file: ', ' has incorrect type, Only .pdf allowed').required('This filed is required'),
    imgFiles: Yup.mixed()
        .isCorrectFormat('img', 'The file: ', ' has incorrect type, Only .jpg allowed').required('This filed is required'),

})


export default FormValidationSchema
