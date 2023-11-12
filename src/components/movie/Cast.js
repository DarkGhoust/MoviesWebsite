function Cast() {

    const listHTML = credits.cast.map((item, ID) =>
        <div className="list_item" key={ID}>
            <img className="spacer-1" alt="episode" src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2" + item.profile_path} />
            <h4 className="spacer-0">{item.name}</h4>
            <p>{item.character}</p>
        </div>
    )

    return (
        <div>
            <div className="list top-rated flex gap-1">
                {listHTML}
            </div>
        </div>
    )
}

export default Cast

const credits = {
    "id": 496243,
    "cast": [
      {
        "adult": false,
        "gender": 2,
        "id": 20738,
        "known_for_department": "Acting",
        "name": "Song Kang-ho",
        "original_name": "Song Kang-ho",
        "popularity": 18.03,
        "profile_path": "/dyWUKQlNyr7SUAjo58VZXvPODkr.jpg",
        "cast_id": 0,
        "character": "Kim Ki-taek",
        "credit_id": "5a4db31fc3a3683b82003a00",
        "order": 0
      },
      {
        "adult": false,
        "gender": 2,
        "id": 115290,
        "known_for_department": "Acting",
        "name": "Lee Sun-kyun",
        "original_name": "Lee Sun-kyun",
        "popularity": 15.962,
        "profile_path": "/mwF2HgyEF2UzxSvNRJEtbWlKbAj.jpg",
        "cast_id": 2,
        "character": "Park Dong-ik",
        "credit_id": "5bcf34f9c3a3686637014df3",
        "order": 1
      },
      {
        "adult": false,
        "gender": 1,
        "id": 556435,
        "known_for_department": "Acting",
        "name": "Cho Yeo-jeong",
        "original_name": "Cho Yeo-jeong",
        "popularity": 23.973,
        "profile_path": "/n7YWOoquBL9g3qEwQ2zvrQSW96L.jpg",
        "cast_id": 3,
        "character": "Yeon-kyo",
        "credit_id": "5bcf351f92514172df0118e1",
        "order": 2
      },
      {
        "adult": false,
        "gender": 2,
        "id": 1255881,
        "known_for_department": "Acting",
        "name": "Choi Woo-shik",
        "original_name": "Choi Woo-shik",
        "popularity": 20.544,
        "profile_path": "/bIdt6LrqMpGQtGTZ1gmji6eGzTH.jpg",
        "cast_id": 4,
        "character": "Ki-woo",
        "credit_id": "5bcf358dc3a368662f013901",
        "order": 3
      }
    ]
  }

