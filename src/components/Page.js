import EpisodeList from "./EpisodeList"

function Page() {
    return (
        <main>
            <section className="flex col">
                <div>
                    <h5>Welcome</h5>
                    <hr className="line" />
                </div>
                <h1>Lets amke your own cinema </h1>
                <p>You can still enjoy the latest movies...</p>
                <div>
                    <a className="secondary_btn btn" href="#">Show Plans</a>
                    <a className="main_btn btn" href="#">Get started</a>
                </div>
                <EpisodeList />
            </section>
        </main>
    )
}

export default Page
