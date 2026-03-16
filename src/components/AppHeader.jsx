import { useState } from 'react'
import AppNavbarMenu from './AppNavbarMenu'
import AppNavbarSelect from './AppNavbarSelect'

export default function AppHeader({ newSetGenre, setTempGenre, tempGenre}) {


    function handleGenreFilter(e) {
        e.preventDefault()

    }

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
                        <form className="d-flex" role="search" onSubmit={handleGenreFilter}>
                            <select className="mx-3" onChange={(e) => setTempGenre(e.target.value)}>
                                {
                                    newSetGenre.map((element, index) =>
                                        <AppNavbarSelect
                                            key={index}
                                            genre={element}
                                        />
                                    )
                                }
                            </select>
                        </form>
                    </div>
                </div>
            </nav>
        </header >
    )
}
