import "./app-info.css";

function AppInfo({appInfoData, icon}){
    return(
        <figure>
            <img src={appInfoData.photo} alt={appInfoData.title}/>
            <figcaption><h2>{appInfoData.title}</h2></figcaption>
            <img src={icon} alt=""/>
            <p>{appInfoData.text}</p>
        </figure>
    )
}

export default AppInfo;