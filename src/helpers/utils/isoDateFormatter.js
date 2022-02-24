const formatDate = (timeStamp) => {
    const isoStringDate = new Date(timeStamp).toISOString().split('T')[0]

    const year = +isoStringDate.split('-')[0]
    const month = +isoStringDate.split('-')[1]
    const day = +isoStringDate.split('-')[2]

    return {
        year,
        month: month - 1,
        day
    }
}

export default formatDate