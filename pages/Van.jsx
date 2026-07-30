import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { GoArrowLeft } from "react-icons/go";

export default function Van()
{
    const {id}=useParams()
    const [vanData,setVanData]=useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${id}`)
        .then((res)=>res.json())
        .then(((data)=>setVanData(data.vans)))
    },[])
    console.log(vanData)
    if(vanData!=null)
    return(
        <>
            <div className="VanWrapper">
                <div className="Van">
                    <Link to="/vans" className="BackToAllVans"><GoArrowLeft/>Back to all vans</Link>
                    <img src={vanData.imageUrl} alt={vanData.name}/>
                    <div className="VanInfo-Type">
                        <p>{vanData.type.charAt(0).toUpperCase()+vanData.type.slice(1)}</p>
                    </div>
                    <h1>{vanData.name}</h1>
                    <p>${vanData.price}/day</p>
                    <p>{vanData.description}</p>
                    <button>Find your van</button> 
                </div>
            </div>
        </>
    )
    else
    return
}