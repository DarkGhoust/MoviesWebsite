import EpisodeList from "./EpisodeList"
import "../css/page.css"

function Page() {
    return (
        <main>
            <section className="flex hero glass-reflection">
                <div className="max-width flex col">
                    
                    <div style={{width: "50%"}}>
                        <div className="flex gap-0 spacer-1" style={{alignItems: "center"}}>
                            <p className="text-md">Welcome</p>
                            <hr className="line" />
                        </div>
                        <h1 className="spacer-1">Lets make your<br/>Own cinema </h1>
                        <p className="spacer-1">You can still enjoy the latest movies...</p>
                        <div className="flex gap-0 spacer-1">
                            <a className="secondary_btn btn" href="#">Show Plans</a>
                            <a className="main_btn btn" href="#">Get started</a>
                        </div>
                    </div>
                    <EpisodeList />
                </div>
            </section>
        </main>
    )
}

export default Page
