
function Footer() {

    const currentYear = new Date().getFullYear()
    return (
        <footer className="text-sm">
            <p className="text-center mb-2 text-slate-600 dark:text-slate-400">All info and images were taken from TMDB Api</p>
            <hr className="border-slate-300 dark:border-slate-600 w-50 mb-2"/>
            <p className="text-center text-slate-600 dark:text-slate-400">Developed by Andrii Oleniuk | {currentYear}</p>
        </footer>
    )
}

export default Footer
