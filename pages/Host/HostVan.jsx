import { useEffect, useState } from "react"
import { GoArrowLeft } from "react-icons/go"
import { Link, useParams } from "react-router-dom"
export default function HostVan()
{
    const {id}=useParams()
    const [van,setVan]=useState(null)
    useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
        .then((res)=>res.json())
        .then((data)=>setVan(data.vans[0]))
    },[id])

    return van?(
        <>
            <Link to="../vans" className="BackToAllVans"><GoArrowLeft/>Back to all vans</Link>
            <div className="HostVans">
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
        </>    
    ):null
}