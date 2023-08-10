import "./main.css"
export default function Main({children}){
    return(
        <main>
            {children[0]}
            <div id="simple-break"></div>
            {children[1]}
        </main>
    )
}
