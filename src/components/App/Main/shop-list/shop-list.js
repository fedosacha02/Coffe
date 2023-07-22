import ShopListItem from "./shop-list-item/shop-list-item";

function ShopList({shopData}){
    const products = shopData.map((el, id) => {
        return(
        <ShopListItem key={id} {...el}>
        </ShopListItem>
        )
    });
    return(
        <article>
            {products}
        </article>
    )
}

export default ShopList;