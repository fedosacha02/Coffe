import "./app-info.css";
import Break from "../../Break/break";

function AppInfo({appInfoData, icon}){
    return(
        <figure className="app-info">
            <img src={appInfoData.photo} alt={appInfoData.title}/>
            <div>
                <figcaption><h2>{appInfoData.title}</h2></figcaption>
                <Break icon={icon}></Break>
                <p>{appInfoData.text}</p>
            </div>
        </figure>
    )
}

export default AppInfo;