import EpisodeList from "./EpisodeList"
import TopRated from "./TopRated"
import Plans from "./Plans"
import "../../css/page.css"

function Page() {
    return (
        <main className="glass-reflection">
            <section className="flex hero spacer-2">
                <div className="max-width flex col">
                    
                    <div style={{width: "50%"}}>
                        <div className="flex gap-0 spacer-1" style={{alignItems: "center"}}>
                            <p className="text-md">Welcome</p>
                            <hr className="line" />
                        </div>
                        <h1 className="spacer-1">Lets make your<br/>Own cinema </h1>
                        <p className="spacer-1">You can still enjoy the latest movies and other movies online and at a lower price</p>
                        <div className="flex gap-0 spacer-2">
                            <a className="secondary_btn btn" href="#">Show Plans</a>
                            <a className="main_btn btn" href="#">Get started</a>
                        </div>
                    </div>
                    <EpisodeList />
                </div>
            </section>

            <section className="flex" id="top_rated">
                <div className="max-width flex col">
                    <h2 className="spacer-1">The Most Popular <br/>Movies To Watch</h2>
                    <TopRated />
                </div>
            </section>

            <section className="flex" id="pricing">
                <div className="max-width flex col">
                    <h2 className="spacer-1">Choose The Plan That<br />Suits For You</h2>
                    <p className="spacer-2">We present packages that you can choose to start watching various movies at low prices and according to your needs</p>
                    <Plans />
                </div>
            </section>
        </main>
    )
}

export default Page
