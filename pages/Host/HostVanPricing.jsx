import { useOutletContext } from "react-router-dom"
export default function HostVanPricing()
{
    const van=useOutletContext()
    return van?(
        <p>
            <span style={{fontSize:"24px",fontWeight:"500"}}>${van.price}</span>
            <span color="#4D4D4D">/day</span>
        </p>
    ):null
}