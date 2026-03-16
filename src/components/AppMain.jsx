import AppMainTitleList from './AppMainTitleList'

export default function AppMain({movies}) {

    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                        {
                            movies.map(({title, genre}, index) => (
                                <AppMainTitleList
                                key={index}
                                title={title}
                                genre={genre}
                                />    
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}