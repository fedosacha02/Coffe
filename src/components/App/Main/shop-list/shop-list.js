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
        <div className="shop">
            <section className="filter-panel">
                <div className="search-panel">
                    <p>Looking for</p>
                    <input placeholder="Start typing here..."></input>
                </div>
                
                <div className="button-panel">
                    <p>Or filter</p>
                    {countries.map((country, id) => <button key={id} value={country}>{country}</button>)}
                </div>
            </section>
            <section className="product-list">
                {products}
            </section>
        </div>
        
    )
}

export default ShopList;