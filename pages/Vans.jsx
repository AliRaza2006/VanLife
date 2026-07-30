import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Vans()
{
    const [vans,SetVans]=useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then((res)=>res.json())
        .then((data)=>SetVans(data.vans))
    },[])
    return(
        <div style={{display:"flex",justifyContent:"center"}}>
            <div className="VansPage">
                <h1>Explore our van options</h1>
                <div className="filtersGrid">
                    <button>Simple</button>
                    <button>Luxury</button>
                    <button>Rugged</button>
                    <p style={{marginLeft:"20px"}}>Clear filters</p>
                </div>
                <div className="VanCardsGrid">
                    {
                        vans.map((van)=>(
                        <Link className="vanLink" key={van.id} to={`/van/${van.id}`}>
                            <div className="vanCard" width="100%">
                                    <img src={van.imageUrl} alt={van.name} />
                                    <div className="VanInfo-VanPage">
                                        <div>
                                            <p className="VanInfo-Name">{van.name}</p>
                                            <div className="VanInfo-Type">
                                                <p>{van.type.charAt(0).toUpperCase()+van.type.slice(1)}</p>
                                            </div>
                                        </div>
                                        <p className="VanInfo-Price">${van.price}<br/><span style={{fontSize:"16px", fontWeight:"normal", color:"#161616"}}>/day</span></p>
                                    </div>
                            </div>
                        </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}