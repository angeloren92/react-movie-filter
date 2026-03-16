import { useEffect } from 'react'
import AppMainTitleList from './AppMainTitleList'

export default function AppMain({movies, tempGenre, setFiltered, filtered }) {

    useEffect(() =>{
        if (tempGenre !== 'Tutte le Categorie') {
            setFiltered(movies.filter(element => element.genre === tempGenre))
        } else {
            setFiltered(movies)
        }

    }, [tempGenre])

    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                        {
                            filtered.map(({title, genre}, index) => (
                                <AppMainTitleList
                                key={index}
                                title={title}
                                genre={genre}
                                />    
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}