import { useState } from 'react'
import AppMain from './components/AppMain'
import AppHeader from './components/AppHeader'

function App() {

  const movies = [
    { title: 'Inception', genre: 'Fantascienza' },
    { title: 'Il Padrino', genre: 'Thriller' },
    { title: 'Titanic', genre: 'Romantico' },
    { title: 'Batman', genre: 'Azione' },
    { title: 'Interstellar', genre: 'Fantascienza' },
    { title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  const newSetGenre = Array.from(new Set(movies.map(element => element.genre)))
  newSetGenre.unshift('Tutte le Categorie')
  const [filtered, setFiltered] = useState(movies)
  const [tempGenre, setTempGenre] = useState('Tutte le Categorie')
  const [tempTitle, setTempTitle] = useState('')

  return (
    <>
      <AppHeader/>
      <AppMain
        setTempGenre={setTempGenre}
        newSetGenre={newSetGenre}
        movies={movies}
        tempGenre={tempGenre}
        filtered={filtered}
        setFiltered={setFiltered}
        setTempTitle={setTempTitle}
        tempTitle={tempTitle}
      />
    </>
  )
}

export default App