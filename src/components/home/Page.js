import TopRated from "./TopRated"
import { Link } from "react-router-dom"

function Page() {
    return (
        <div className="page">
            <section className="flex overflow-hidden relative hero flex-col justify-end rounded-2xl bg-slate-600 pb-5 pt-20 px-7 mb-1 bg-cover"
                style={{backgroundImage: `url("https://img.freepik.com/free-photo/assortment-cinema-supplies_23-2147803976.jpg?w=1060&t=st=1700145238~exp=1700145838~hmac=41bf4ec655250a12b03cf363f33a359d8ba587e61b96e2196efbb14f2f72dd67")`}}>
                    <div className="z-[2]">
                        <h2 className="text-3xl font-bold mb-4">Explore the Cinematic Universe:<br/>Your Gateway to Movies, Reviews, and Beyond!</h2>
                        <p className="mb-2">Welcome to our movie haven, where the magic of cinema comes to life! 
                        Immerse yourself in the world of film with our comprehensive movie website, a treasure trove for cinephiles 
                        and casual viewers alike. Discover the latest releases, delve into timeless classics, and get a sneak peek into 
                        upcoming blockbusters.</p>

                        <p className="mb-4">Our user-friendly interface makes it a breeze to navigate through a vast collection of movies, 
                        TV shows, and documentaries. Dive into detailed information, cast and crew details, ratings, and reviews 
                        that will guide you in making the perfect movie night selection. Whether you're a fan of heart-pounding action, 
                        gripping drama, or side-splitting comedy, we've got something for every taste.</p>
                        
                        <Link className="text-slate-50 bg-teal-400 dark:bg-orange-600 rounded-xl px-4 py-2 block w-fit" to="/discover">Discover</Link>
                    </div>
            </section>
            <i className="text-right text-sm mb-8 block">Image by <a target="_blank" href="https://www.freepik.com/free-photo/assortment-cinema-supplies_2337193.htm#query=movies%20background&position=12&from_view=search&track=ais&uuid=7b5c4adc-f3ba-44bb-8619-27123d45c766">Freepik</a></i>

            <section className="flex flex-col" id="top_rated">
                <h2 className="text-lg font-medium mb-5">Popular movies you'll want to watch</h2>
                <TopRated />
            </section>
        </div>
    )
}

export default Page
