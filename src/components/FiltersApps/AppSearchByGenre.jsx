import AppSelectGenre from './AppSelectGenre'

export default function AppSerchByGenre({ 
    setTempGenre, 
    newSetGenre, 
}) {

    return (
        <form className="d-flex flex-column" role="search" >
            <label className='mb-2'>Scegli la Categoria</label>
            <select className="mx-2 rounded-2 p-1 mb-3" onChange={(e) => setTempGenre(e.target.value)}>
                {
                    newSetGenre.map((element, index) =>
                        <AppSelectGenre
                            key={index}
                            genre={element}
                        />
                    )
                }
            </select>
        </form>
    )
} 