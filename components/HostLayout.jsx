import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout()
{
    function currentlyClicked({isActive})
    {
        return isActive?"NavLinkClicked":""
    }
    return(
        <>
            <div className="HostLayout">
                <NavLink to="/host" className={currentlyClicked} end>Dashboard</NavLink>
                <NavLink to="/host/income" className={currentlyClicked}>Income</NavLink>
                <NavLink to="/host/vans" className={currentlyClicked}>Vans</NavLink>
                <NavLink to="/host/reviews" className={currentlyClicked}>Reviews</NavLink>
            </div>
            <Outlet/>
        </>
    )
}