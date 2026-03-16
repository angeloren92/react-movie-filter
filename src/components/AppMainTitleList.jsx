export default function AppMainTitleList({index, title, genre}) {

    return (
        <li key={index} className="my-3">
            <h2 className="m-0">{title}</h2>
            <small className="text-muted">{genre}</small>
        </li>
    )
}