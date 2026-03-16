export default function AppMainTitleList({title, genre}) {

    return (
        <li className="my-3">
            <h2 className="m-0">{title}</h2>
            <small>{genre}</small>
        </li>
    )
}