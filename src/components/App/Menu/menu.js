function Nav({navigation}){
    const elements = navigation.map(({title,path}, i) => {
        return(
            <a href={path} key={i}>{title}</a>
        )
    })
    return(
        <nav>
            {elements}
        </nav>
    )
}

export default Nav;