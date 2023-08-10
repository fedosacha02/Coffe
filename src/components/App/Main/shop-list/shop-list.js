
import ShopListItem from "./shop-list-item/shop-list-item";
import "./shop-list.css";

export default function ShopList({shopData}){

    const countries = Array.from(new Set(shopData.map((el => el.country))));

    const products = shopData.map((el, id) => {
        return(
            <ShopListItem key={id} {...el}/>
        )
    });
    return (
            <div className="shop">
                <section className="filter-panel">
                    <p>Looking for</p>
                    <div className="search-panel">
                        <input placeholder="Start typing here..."></input>
                    </div>
                    <p>Or filter</p>
                    <div className="button-panel">
                        {countries.map((country, id) => <button key={id} value={country}>{country}</button>)}
                    </div>
                </section>
                <section className="product-list">
                    {products}
                </section>
            </div>
        )
}