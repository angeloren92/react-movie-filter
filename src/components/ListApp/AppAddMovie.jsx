export default function AppAddMovies({ newElement, setNewElement }) {

    function handleAddItem(e) {
        e.preventDefault()
    }

    return (
        <form className="d-flex" onSubmit={handleAddItem}>
            <input type="text" placeholder="Inserisci nuovo Titolo" value={newElement.title} onChange={(e) => setNewElement({ ...newElement, title: e.target.value })} />
            <input type="text" placeholder="Inserisci genere" value={newElement.genre} onChange={(e) => setNewElement({ ...newElement, genre: e.target.value })} />
            <button type="submit" className="btn btn-outline-secondary">Aggiungi</button>
        </form>
    )
}