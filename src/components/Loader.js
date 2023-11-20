
function Loader({elements}) {
    const items =  Array.from({ length: elements }, (value, index) => index)
    
    return items.map(item => <div className="rounded-2xl bg-slate-200 dark:bg-slate-600 aspect-[16/6] mb-8 w-full"></div>)
}

export default Loader
