function filesValidator(type) {
    return this.test('ifPdf', {type}, function (files) {

        let result = true
        let fileNames = []

        for (let i = 0; i < files.length; i++) {
            if (type === 'pdf' && files[i].type !== 'application/pdf') {
                if(result) {
                    result = false
                }
                fileNames.push(files[i].name)
            }
            if (type === 'img' && files[i].type !== 'image/jpeg') {
                if(result) {
                    result = false
                }
                result = false
                fileNames.push(files[i].name)
            }
        }

        if (!result) {
            return this.createError({
                path: this.path,
                message: `
                    ${fileNames.length > 1 ? 'Files:' : 'File:'} ${fileNames.join(', ')} ${fileNames.length > 1 ? 'have' : 'has'} incorrect format,
                    Only ${type === 'img' ? 'img' : type === 'pdf' ? '.pdf' : ''} is allowed
                `
            })
        }

        return true
    })
}

export default filesValidator