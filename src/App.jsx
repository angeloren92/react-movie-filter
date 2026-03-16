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

  return (
    <>
      <AppHeader genre={movies.genre}/>
      <AppMain movies={movies} />
    </>
  )
}

export default App
