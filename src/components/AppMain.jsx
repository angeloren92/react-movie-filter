import { useEffect } from 'react'
import AppMainTitleList from './AppMainTitleList'
import AppSelect from './AppSelect'


export default function AppMain({ movies, tempGenre, setFiltered, filtered, newSetGenre, setTempGenre }) {

    useEffect(() => {
        if (tempGenre !== 'Tutte le Categorie') {
            setFiltered(movies.filter(element => element.genre === tempGenre))
        } else {
            setFiltered(movies)
        }

    }, [tempGenre])

    return (
        <main className='bg-light vh-100'>
            <div className="container">
                <div className="row row-cols-2 py-5">
                    <div className="col-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <label className='mb-2'>Scegli la Categoria</label>
                                <form role="search" >
                                    <select className="mx-2 rounded-2 p-1" onChange={(e) => setTempGenre(e.target.value)}>
                                        {
                                            newSetGenre.map((element, index) =>
                                                <AppSelect
                                                    key={index}
                                                    genre={element}
                                                />
                                            )
                                        }
                                    </select>
                                </form>
                                <hr />
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
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