function filesValidator(type, messageOne, messageTwo) {
    return this.test('ifPdf', {type, messageOne, messageTwo}, function (files) {

        let result = true
        let fileName = ''

        for (let i = 0; i < files.length; i++) {
            if (type === 'pdf' && files[i].type !== 'application/pdf') {
                result = false
                fileName = files[i].name
                break
            }
            if (type === 'img' && files[i].type !== 'image/jpeg') {
                result = false
                fileName = files[i].name
                break
            }
        }

        if (!result) {
            return this.createError({
                path: this.path,
                message: `${messageOne}${fileName}${messageTwo}`
            })
        }

        return true
    })
}

export default filesValidator