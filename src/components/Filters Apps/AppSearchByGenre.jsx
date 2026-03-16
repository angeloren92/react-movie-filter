import { useEffect } from 'react'
import AppSelect from './AppSelectGenre'

export default function AppSerchByGenre({setTempGenre, newSetGenre, tempGenre, setFiltered, movies}) {

        useEffect(() => {
        if (tempGenre !== 'Tutte le Categorie') {
            setFiltered(movies.filter(element => element.genre === tempGenre))
        } else {
            setFiltered(movies)
        }

    }, [tempGenre])

    return (
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
    )
} 