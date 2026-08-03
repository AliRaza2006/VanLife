import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostVans()
{
    const [vans,setVans]=useState([])
    useEffect(()=>{
        fetch("/api/host/vans")
        .then((res)=>res.json())
        .then((data)=>setVans(data.vans))
    },[])
    return(
       <>
            <h1 style={{fontSize:"32px"}}>Your listed vans</h1>
            <div className="HostVansbox">
                {
                    vans.map((van)=>(
                        <Link key={van.id} to={`${van.id}`}>
                            <div>
                                <img src={van.imageUrl} alt={van.name}/>
                                <div>
                                    <h3>{van.name}</h3>
                                    <p>${van.price}/day</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
       </>
    )
}