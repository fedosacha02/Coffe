import './header.css';

export default function Header({headerData, children: menu}){
    return(
        <header style={{backgroundImage: `url(${headerData.background})`}}>
            {menu}
            <h1>{headerData.title}</h1>
        </header>
    )
}
