import { useEffect } from 'react'
import AppSelect from './AppSelectGenre'

export default function AppSerchByGenre({ setTempGenre, newSetGenre, tempGenre, setFiltered, movies }) {

    useEffect(() => {
        if (tempGenre !== 'Tutte le Categorie') {
            setFiltered(movies.filter(element => element.genre === tempGenre))
        } else {
            setFiltered(movies)
        }

    }, [tempGenre])

    return (
        <form className="d-flex flex-column" role="search" >
            <label className='mb-2'>Scegli la Categoria</label>
            <select className="mx-2 rounded-2 p-1 mb-3" onChange={(e) => setTempGenre(e.target.value)}>
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
    )
} 