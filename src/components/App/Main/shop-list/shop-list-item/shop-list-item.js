import "./shop-list-item.css"

function ShopListItem({name, country, price}){
    return(
        <article>
            <img alt=""></img>
            <h3>{name}</h3>
            <h4>{country}</h4>
            <h5>{price}</h5>
        </article>
    )
}

export default ShopListItem;