import "./break.css"

function Break({icon}){
    return(
        <div className="thematic-break">
            <div></div>
            <img alt="" src={icon}></img>
            <div></div>
        </div>
    )
}

export default Break;