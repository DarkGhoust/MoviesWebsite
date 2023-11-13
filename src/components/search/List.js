import { useState, useEffect } from "react"

const list = [
    {
        id: 1,
        img: "mov1.jpg",
        title: "Title",
        rating: 7,
        release_date: "1999-08-02",
        description: "Some text"
    },
    {
        id: 2,
        img: "mov1.jpg",
        title: "Title",
        rating: 2,
        release_date: "1999-08-01",
        description: "Some text 2"
    },
    {
        id: 3,
        img: "mov1.jpg",
        title: "Title",
        rating: 4,
        release_date: "1999-08-12",
        description: "Some text 5 2w2qea"
    },
    {
        id: 4,
        img: "mov1.jpg",
        title: "Title",
        rating: 10,
        release_date: "1999-08-30",
        description: "Some text 87432s dsa dasd21qew sad"
    }
]

function List ({data}){

    const listHTML = list.map((item, ID) =>
        <div className="list_item" key={ID}>
            <img className="spacer-1" alt="episode" src={"/img/" + item.img} />
            <h4 className="spacer-0">{item.title}</h4>
            <p>{item.description}</p>
        </div>
    )

    return listHTML
}

export default List