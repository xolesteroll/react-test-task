import * as Yup from 'yup';

Yup.addMethod(Yup.mixed, 'isPdf', (message) => {
    // return this.test('ifPdf', message, (files) => {
    //     const {path, createError} = this
    //
    //     files.forEach(f => {
    //         if (f.type !== 'application/pdf') {
    //             return createError({
    //                 message,
    //                 path
    //             })
    //         }
    //     })
    //
    //     return true
    // })
    return this.test({
        name: 'isFilePdf',
        message,
        test: files => files.filter(f => f.type !== 'application/pdf').length === 0
    })
})

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
        // .isPdf().required('This filed is required')
})


export default FormValidationSchema
