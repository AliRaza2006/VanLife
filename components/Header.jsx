import {NavLink} from "react-router-dom"
export default function Header()
{
    function currentlyClicked({isActive})
    {
        return isActive?"NavLinkClicked":""
    }
    return(
        <div className="Header" >
            <NavLink to="/">#VANLIFE</NavLink>
            <div>
                <NavLink to="/about" className={currentlyClicked}>About</NavLink>
                <NavLink to="/vans" className={currentlyClicked}>Vans</NavLink>
                <NavLink to="/host" className={currentlyClicked}>Host</NavLink>
            </div>
        </div>
    )
}