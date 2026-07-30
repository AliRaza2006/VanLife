import {Link} from "react-router-dom"
export default function Header()
{
    return(
        <div className="Header">
            <h1>#VANLIFE</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </div>
        </div>
    )
}