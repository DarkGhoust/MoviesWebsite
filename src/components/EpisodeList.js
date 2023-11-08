
const list = [
    {
        img: "url",
        description: "Some text"
    },
    {
        img: "url",
        description: "Some text 2"
    },
    {
        img: "url",
        description: "Some text 5 2w2qea"
    },
    {
        img: "url",
        description: "Some text 87432s dsa dasd21qew sad"
    }
]

function EpisodeList() {

    const listHTML = list.map((item, ID) =>
        <div className="list_item" key={ID}>
            <img alt="episode" src={item.img} />
            <p>{item.description}</p>
        </div>
    )

    return (
        <div className="list episode_list flex gap-0">
            {listHTML}
        </div>
    )
}

export default EpisodeList
