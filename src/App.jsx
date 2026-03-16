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
  const [tempGenre, setTempGenre] = useState('')
  console.log(tempGenre)

  return (
    <>
      <AppHeader
        setTempGenre={setTempGenre}
        newSetGenre={newSetGenre}
        tempGenre={tempGenre}
      />
      <AppMain movies={movies} />
    </>
  )
}

export default App