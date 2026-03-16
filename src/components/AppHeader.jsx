import AppNavbarMenu from './AppNavbarMenu'
import AppNavbarSelect from './AppNavbarSelect'

export default function AppHeader({ movies }) {

    const newSetGenre = Array.from(new Set(movies.map(element => element.genre)))
    console.log(newSetGenre)

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">CINEBLOG01</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <AppNavbarMenu />
                        <form className="d-flex" role="search">
                            <select className="mx-3">
                                {
                                    newSetGenre.map((element, index) =>
                                        <AppNavbarSelect
                                            key={index}
                                            genre={element} />
                                    )
                                }
                            </select>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header >
    )
}