import ShopListItem from "./shop-list-item/shop-list-item";
import "./shop-list.css";

function ShopList({shopData}){
    const products = shopData.map((el, id) => {
        return(
        <ShopListItem key={id} {...el}>
        </ShopListItem>
        )
    });
    const countries = Array.from(new Set(shopData.map((el => el.country))));

    return (
        <div>
            <section className="filter-panel">
                <label>Looking for<input placeholder="Start typing here..."></input></label>
                
                <span>Or filter{countries.map((country, id) => <button key={id} value={country}>{country}</button>)}
                </span>
            </section>
            <section className="shop-list">
                {products}
            </section>
        </div>
        
    )
}

export default ShopList;