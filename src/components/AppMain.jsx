export default function AppMain({movies}) {

    return(
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                        {
                            movies.map(({title, genre}, index) => (
                                <li key={index} className="my-3">
                                    <h2 className="m-0">{title}</h2>
                                    <small className="text-muted">{genre}</small>
                                </li>
                            ))
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}