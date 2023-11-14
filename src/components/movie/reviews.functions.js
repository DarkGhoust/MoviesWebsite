const tinyReview = ( data ) =>{

    const results = data.results.map( item => {
        const tiny = item.content.length > 500 ? item.content.substring(0, 500) + "..." : false

        return {
            ...item,
            isExpanded: false,
            tinyContent: tiny
        }
    })
    return {
        ...data,
        results
    }
} 

const getReleaseDate = (year) =>{      
    var options = {year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(year).toLocaleDateString("en-US", options)
}

export {
    getReleaseDate,
    tinyReview
}