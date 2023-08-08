import "./shop-list-item.css"

function ShopListItem({photo, name, country, price}){
    return(
        <article>
            <img src={photo} alt=""></img>
            <div>
                <h3>{name}</h3>
                <h4>{country}</h4>
                <h5>{price}$</h5>
            </div>
        </article>
    )
}

export default ShopListItem;