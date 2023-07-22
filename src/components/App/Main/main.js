import AppInfo from "./app-info/app-info";
import ShopList from "./shop-list/shop-list";

function Main({shopData}){
    return(
        <main>
            <AppInfo/>
            <ShopList shopData = {shopData}/>
        </main>
    )
}

export default Main;