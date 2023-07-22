import { Component } from "react";

import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer"
class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            navigation: [
                {title: "Coffee house", path: "#"},
                {title: "Coffee house", path: "#"},
                {title: "Coffee house", path: "#"}

            ],
            headerData: {
                headerTitle: {title: "Our Coffee"}
            },
            appInfoData: {},
            shopData: [
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99}
            ]
        }
    }

    render(){
        const {headerData, navigation, shopData} = this.state;
        return(
            <>
                <Header  headerData = {headerData} navigation = {navigation}/>
                <Main shopData = {shopData}/>
                <Footer navigation = {navigation}/>
            </>
        )
    }
    
}



export default App;