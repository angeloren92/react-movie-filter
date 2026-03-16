import AppNavbarMenu from './AppNavbarMenu'
import AppNavbarSearch from './AppNavbarSearch'

export default function AppHeader() {



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
                        <AppNavbarSearch />
                    </div>
                </div>
            </nav>
        </header>
    )
}