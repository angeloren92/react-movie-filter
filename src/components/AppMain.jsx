
import AppMainTitleList from './Rendering Apps/AppMainTitleList'
import AppSearchByTitle from './Filters Apps/AppSearchByTitle'
import AppSerchByGenre from './Filters Apps/AppSearchByGenre'


export default function AppMain({ movies, tempGenre, setFiltered, filtered, newSetGenre, setTempGenre }) {

    return (
        <main className='bg-light vh-100'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <form className="d-flex flex-column" role="search" >
                                    <AppSearchByTitle />
                                </form>
                                <hr />
                                <label className='mb-2'>Scegli la Categoria</label>
                                <form className="d-flex flex-column" role="search" >
                                    <AppSerchByGenre
                                        setTempGenre={setTempGenre}
                                        newSetGenre={newSetGenre}
                                        tempGenre={tempGenre}
                                        setFiltered={setFiltered}
                                        movies={movies}
                                    />
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