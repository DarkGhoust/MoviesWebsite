const getReleaseYear = (item) =>{
    const date = item.release_date
    return date.length > 0 ? new Date(date).getFullYear() : ""
}

export { getReleaseYear }