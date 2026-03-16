import { useEffect } from "react"

export default function AppSearchByTitle({
    setTempTitle,
    tempTitle,
    setFiltered,
    tempGenre,
    newSetGenre,
    setTempGenre,
    movies,
}) {

    useEffect(() => {
        setFiltered(movies.filter(element => element.title.toLowerCase().includes(tempTitle)))
    }, [tempTitle])


    return (
        <form className="d-flex flex-column" role="search">
            <label className='mb-2'>Cerca Titolo</label>
            <input value={tempTitle} onChange={(e) => setTempTitle(e.target.value.toLowerCase())} className="mx-2 rounded-2 p-1 mb-3" type="text" />
        </form>
    )
}