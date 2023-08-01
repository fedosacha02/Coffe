import './menu.css'


function Menu({menu, icon, position = "flex-start"}){
    const elements = menu.map(({title, path}, i) => {
        if(!i) return  <li><img src={icon} alt=""/><a href={path} key={i}>{title}</a></li>;
        return <li><a href={path} key={i}>{title}</a></li>
    })
    return(
        <nav style={{alignSelf: position}}>
            <ul>
                {elements}
            </ul>
        </nav>
    )
}

export default Menu;