import { useState } from "react"

export default function AppAddMovies({ setCopyMovies, copyMovies }) {

    const [newElement, setNewElement] = useState({ title: '', genre: '' })
    const [errorTitle, setErrorTitle] = useState(false)
    const [errorGenre, setErrorGenre] = useState(false)

    function handleAddItem(e) {
        e.preventDefault()
        if (newElement.title.length >= 5 && newElement.genre.length >= 5) {
            setCopyMovies([newElement, ...copyMovies])
            setNewElement({ title: '', genre: '' })
            setErrorTitle(false)
            setErrorGenre(false)
        } else if (newElement.title.length >= 5 && newElement.genre.length < 5) {
            setErrorTitle(false)
            setErrorGenre(true)
        } else if (newElement.genre.length >= 5 && newElement.title.length < 5) {
            setErrorGenre(false)
            setErrorTitle(true)
        } else {
            setErrorTitle(true)
            setErrorGenre(true)
        }
    }

    return (
        <form className="d-flex gap-4" onSubmit={handleAddItem}>
            <div className="w-100">
            <input type="text" placeholder="Inserisci nuovo Titolo" value={newElement.title} onChange={(e) => setNewElement({ ...newElement, title: e.target.value })} className="w-100"/>
            {
                errorTitle === true ? <label className="text-danger">Inserisci almeno 5 caratteri</label> : ''
            }
            </div>
            <div className="w-100">
            <input type="text" placeholder="Inserisci genere" value={newElement.genre} onChange={(e) => setNewElement({ ...newElement, genre: e.target.value })} className="w-100"/>
            {
                errorGenre === true ? <label className="text-danger">Inserisci almeno 5 caratteri</label> : ''
            }
            </div>
            <button type="submit" className="btn btn-outline-secondary align-self-baseline">Aggiungi</button>
        </form>
    )
}