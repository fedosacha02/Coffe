import "./app-info.css";
import Break from "../../Break/break";

export default function AppInfo({appInfoData, icon}){
    return(
        <figure className="app-info">
            <img src={appInfoData.photo} alt={appInfoData.title}/>
            <div>
                <figcaption><h2>{appInfoData.title}</h2></figcaption>
                <Break icon = {icon}/>
                <p>{appInfoData.text}</p>
            </div>
        </figure>
    )
}