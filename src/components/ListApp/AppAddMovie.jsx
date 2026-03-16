import { useState } from "react"

export default function AppAddMovies({setCopyMovies, copyMovies}) {

    const [newElement, setNewElement] = useState({ title: '', genre: '' })

    function handleAddItem(e) {
        e.preventDefault()
        setCopyMovies([newElement, ...copyMovies])
        setNewElement({ title: '', genre: '' })
    }

    return (
        <form className="d-flex" onSubmit={handleAddItem}>
            <input type="text" placeholder="Inserisci nuovo Titolo" value={newElement.title} onChange={(e) => setNewElement({ ...newElement, title: e.target.value })} />
            <input type="text" placeholder="Inserisci genere" value={newElement.genre} onChange={(e) => setNewElement({ ...newElement, genre: e.target.value })} />
            <button type="submit" className="btn btn-outline-secondary">Aggiungi</button>
        </form>
    )
}