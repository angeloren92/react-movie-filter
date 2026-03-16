
import AppMainTitleList from './ListApp/AppMainTitleList'
import AppSearchByTitle from './FiltersApps/AppSearchByTitle'
import AppSerchByGenre from './FiltersApps/AppSearchByGenre'
import AppAddMovies from './ListApp/AppAddMovie'
import { useEffect } from 'react'

export default function AppMain({
    movies,
    tempGenre,
    setFiltered,
    filtered,
    newSetGenre,
    setTempGenre,
    setTempTitle,
    tempTitle,
    setNewElement,
    newElement
}) {

    useEffect(() => {
        let tempFiltered = movies.filter(element => {
            const tempFilterTitle = element.title.toLowerCase().includes(tempTitle.toLowerCase())
            const tempFilterGenre = tempGenre === 'Tutte le Categorie' || element.genre.includes(tempGenre)
            console.log(tempFilterGenre, tempFilterTitle)
            return tempFilterTitle && tempFilterGenre
        })

        setFiltered(tempFiltered)
    }, [tempGenre, tempTitle])

    return (
        <main className='bg-light vh-100'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <AppSearchByTitle
                                    setTempTitle={setTempTitle}
                                    tempTitle={tempTitle}
                                />
                                <hr />
                                <AppSerchByGenre
                                    setTempGenre={setTempGenre}
                                    newSetGenre={newSetGenre}
                                />
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <AppAddMovies
                                    setNewElement={setNewElement}
                                    newElement={newElement}
                                />
                                <ul className="list-unstyled">
                                    {
                                        filtered.map(({ title, genre }, index) => (
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
                </div>
            </div>
        </main>
    )
}