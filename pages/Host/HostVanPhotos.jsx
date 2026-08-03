import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos()
{
    const van=useOutletContext()
    return van?(
        <img src={van.imageUrl} alt={van.name} width="105px" style={{borderRadius:"5px"}} />
    ):null
}