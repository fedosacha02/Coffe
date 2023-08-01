import { Component } from "react";

import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";

class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            menu: [
                {title: "Coffee house", path: "#"},
                {title: "Our coffee", path: "#"},
                {title: "For your pleasure", path: "#"}

            ],
            headerData: {
                title: "Our Coffee",
                background: process.env.PUBLIC_URL + "/assets/menu-background.png",
                icon: process.env.PUBLIC_URL + "/assets/light-coffee-beans.svg"
            },
            appInfoData: {
                title: "About our beans",
                photo: process.env.PUBLIC_URL + "/assets/girl.jpg",
                text: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                Afraid at highly months do things on at. Situation recommend objection do intention
                so questions. 
                As greatly removed calling pleased improve an. Last ask him cold feel
                met spot shy want. Children me laughing we prospect answered followed. At it went
                is song that held help face.`

            },
            shopData: [
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99}
            ],
            theme: {
                light_icon: process.env.PUBLIC_URL + "/assets/light-coffee-beans.svg",
                dark_icon: process.env.PUBLIC_URL + "/assets/dark-coffee-beans.svg",
                light_dark_icon: process.env.PUBLIC_URL + "/assets/light-dark-coffee-beans.svg",
            }
        }
    }

    render(){
        const {menu, headerData, appInfoData, shopData, theme} = this.state;
        return(
            <>
                <Header headerData = {headerData} menu = {menu} icon = {theme.light_icon}/>
                <Main shopData = {shopData} appInfoData = {appInfoData} icon = {theme.dark_icon}/>
                <Footer menu = {menu} menu_icon = {theme.light_dark_icon} footer_icon = {theme.dark_icon}/>
            </>
        )
    }
    
}



export default App;