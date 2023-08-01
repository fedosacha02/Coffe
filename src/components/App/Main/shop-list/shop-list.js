import ShopListItem from "./shop-list-item/shop-list-item";
import "./shop-list.css";

function ShopList({shopData}){
    const products = shopData.map((el, id) => {
        return(
        <ShopListItem key={id} {...el}>
        </ShopListItem>
        )
    });
    const countries = shopData.map((el, id) => {
        return <input value={el.country} key={id}></input>
    });
    return(
        <div>
            <section className="filter-panel">
                <label>Looking for</label>
                <input placeholder="Start typing here..."></input>
                <fieldset>
                    <legend>Or filter</legend>
                    {countries}
                </fieldset>
            </section>
            <section className="shop-list">
                {products}
            </section>
        </div>
        
    )
}

export default ShopList;