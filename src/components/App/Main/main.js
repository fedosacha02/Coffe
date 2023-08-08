import AppInfo from "./app-info/app-info";
import ShopList from "./shop-list/shop-list";
import "./main.css"
function Main({appInfoData, shopData, icon}){
    return(
        <main>
            <AppInfo appInfoData = {appInfoData} icon={icon}/>
            <div id="simple-break"></div>
            <ShopList shopData = {shopData}/>
        </main>
    )
}

export default Main;