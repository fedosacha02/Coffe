import './menu.css'


export default function Menu({menu, icon, position = "flex-start"}){
    const elements = menu.map(({title, path}, i) => {
        if(!i) return  <li key={i}><img src={icon} alt=""/><a href={path}>{title}</a></li>;
        return <li key={i}><a href={path}>{title}</a></li>
    });

    return(
        <nav style={{alignSelf: position}}>
            <ul>
                {elements}
            </ul>
        </nav>
    )
}