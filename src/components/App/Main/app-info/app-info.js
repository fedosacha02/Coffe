function AppInfo(){
    return(
        <figure>
            <img src={process.env.PUBLIC_URL + "/girl.jpg"} alt="About our beans"/>
            <figcaption>About our beans</figcaption>
        </figure>
    )
}

export default AppInfo;