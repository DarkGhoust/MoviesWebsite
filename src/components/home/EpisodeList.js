
const list = [
    {
        img: "ep1.jpg",
        description: "Clip that shows how exciting this new movie is"
    },
    {
        img: "ep1.jpg",
        description: "The fight scene that is the highlight of this movie"
    },
    {
        img: "ep1.jpg",
        description: "Some text 5 2w2qea"
    },
    {
        img: "ep1.jpg",
        description: "Some text 87432s dsa dasd21qew sad"
    }
]

function EpisodeList() {

    const listHTML = list.map((item, ID) =>
        <div className="list_item" key={ID}>
            <img className="spacer-1" alt="episode" src={ "/img/" + item.img} />
            <p>{item.description}</p>
        </div>
    )

    return (
        <div className="list episode_list flex gap-1">
            {listHTML}
        </div>
    )
}

export default EpisodeList
