import Menu from "../Menu/menu";
import './header.css';

function Header({headerData, menu, icon}){
    return(
        <header style={{backgroundImage: `url(${headerData.background})`}}>
            <Menu menu = {menu} icon = {icon}/>
            <h1>{headerData.title}</h1>
        </header>
    )
}

export default Header;