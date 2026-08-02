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
                <NavLink to="." className={currentlyClicked} end>Dashboard</NavLink>
                <NavLink to="income" className={currentlyClicked}>Income</NavLink>
                <NavLink to="vans" className={currentlyClicked}>Vans</NavLink>
                <NavLink to="reviews" className={currentlyClicked}>Reviews</NavLink>
            </div>
            <Outlet/>
        </>
    )
}