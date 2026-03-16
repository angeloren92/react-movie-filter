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
  const [copyMovies, setCopyMovies] = useState(movies)
  const [filtered, setFiltered] = useState(copyMovies)

  return (
    <>
      <AppHeader/>
      <AppMain
        copyMovies={copyMovies}
        filtered={filtered}
        setFiltered={setFiltered}
        setCopyMovies={setCopyMovies}
      />
    </>
  )
}

export default App