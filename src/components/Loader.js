
function Loader({elements}) {
    const items =  Array.from({ length: elements }, (value, index) => index)
    
    return items.map(item => <div className="loader rounded"></div>)
}

export default Loader
