import { createContext, useEffect, useState } from "react"
import { GoArrowLeft } from "react-icons/go"
import { NavLink,Link, Outlet, useParams } from "react-router-dom"
export default function HostVanLayout()
{
    function currentlyClicked({isActive})
    {
        return isActive?"NavLinkClicked":""
    }
    const {id}=useParams()
    const [van,setVan]=useState(null)
    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then((res)=>res.json())
        .then((data)=>setVan(data.vans[0]))
    },[id])

    return van?(
        <div style={{marginBottom:"25px"}}>
            <Link to=".." relative="path" className="BackToAllVans" style={{width:"fit-content"}}><GoArrowLeft/>Back to all vans</Link>
            <div style={{marginBottom:"25px"}} className="HostVans">
            {
                <div className="HostVanDetails">
                    <img width="160px" style={{borderRadius:"5px"}} src={van.imageUrl} alt={van.name}/>
                    <div>
                        <div className="VanInfo-Type">
                            <p>{van.type.charAt(0).toUpperCase()+van.type.slice(1)}</p>
                        </div>
                        <h1>{van.name}</h1>
                        <p><span>${van.price}</span>/day</p>
                    </div>
                </div>
            }
            </div>
            <div className="HostLayout">
                <NavLink to="." className={currentlyClicked} end>Details</NavLink>
                <NavLink to="pricing" className={currentlyClicked}>Pricing</NavLink>
                <NavLink to="photos" className={currentlyClicked}>Photos</NavLink>
            </div>
            <Outlet context={van}/>
        </div>    
    ):null
}