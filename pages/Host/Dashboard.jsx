import { useEffect, useState } from "react";
import { GoStarFill } from "react-icons/go";
export default function Dashboard()
{
    const [vans,setVans]=useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then((res)=>res.json())
        .then((data)=>setVans(data.vans))
    },[])
    return( 
        <>   
            <div className="HostDashboardWelcome">
                <h2>Welcome!</h2>
                <div>
                    <p>Income last <span>30 days</span></p>
                    <p style={{color:"#161616"}}>Details</p>
                </div>
                <h1>$2,260</h1>
            </div>
            <div className="HostDashboardReview">
                <div className="DashboardReviewScore">
                    <p style={{fontSize:"21px",fontWeight:"bold",lineHeight:"22px"}}>Review score</p>
                    <p style={{fontSize:"18px"}}><GoStarFill/><span style={{fontWeight:"bold"}}>5.0</span>/5</p>
                </div>
                <p>Details</p>
            </div>
            <div style={{padding:"25px"}}>
                <div className="ListedVansHeadingDashboard">
                    <h2>Your listed vans</h2>
                    <p>View all</p>
                </div>
                <div className="DashboardVansbox">
                    {
                        vans.map((van)=>(
                            <div key={van.id}>
                                <div>
                                    <img src={van.imageUrl} alt={van.name}/>
                                    <div>
                                        <h3>{van.name}</h3>
                                        <p>${van.price}/day</p>
                                    </div>
                                </div>
                                <p>Edit</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    ) 
}