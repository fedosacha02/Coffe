import Nav from "../Menu/menu";
import HeaderTitle from "./HeaderTitle/header-title"
function Header({headerData, navigation}){
    return(
        <div>
            <Nav navigation = {navigation}/>
            <HeaderTitle headerTitle = {headerData.headerTitle}/>
        </div>
    )
}

export default Header;