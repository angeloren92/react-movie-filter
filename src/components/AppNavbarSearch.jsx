import { useState } from "react"

export default function AppNavbarSearch({genre}) {

    const [tempElement, setTempElement] = useState('') 

    return (
        <form className="d-flex" role="search">
            <select className="mx-3">
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
            </select>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    )
}