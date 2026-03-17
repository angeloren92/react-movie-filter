import { useState } from 'react'
import AppMainTitleList from './ListApp/AppMainTitleList'
import AppSearchByTitle from './FiltersApps/AppSearchByTitle'
import AppSerchByGenre from './FiltersApps/AppSearchByGenre'
import AppAddMovies from './ListApp/AppAddMovie'
import { useEffect } from 'react'

export default function AppMain({
    copyMovies,
    setCopyMovies
}) {

    const [tempGenre, setTempGenre] = useState('Tutte le Categorie')
    const [tempTitle, setTempTitle] = useState('')
    const newSetGenre = Array.from(new Set(copyMovies.map(element => element.genre)))
    const [filtered, setFiltered] = useState(copyMovies)
    newSetGenre.unshift('Tutte le Categorie')

    useEffect(() => {
        let tempFiltered = copyMovies.filter(element => {
            const tempFilterTitle = element.title.toLowerCase().includes(tempTitle.toLowerCase())
            const tempFilterGenre = tempGenre === 'Tutte le Categorie' || element.genre.includes(tempGenre)
            return tempFilterTitle && tempFilterGenre
        })
        setFiltered(tempFiltered)
    }, [tempGenre, tempTitle, copyMovies])

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
                                    setCopyMovies={setCopyMovies}
                                    copyMovies={copyMovies}
                                />
                                <ul className="list-unstyled">
                                    {
                                        ...filtered.map(({ title, genre }, index) => (
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