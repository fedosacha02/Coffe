import { Component } from "react";
import Header from "./Header/header";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import Break from "./Break/break";
import Menu from "./Menu/menu";
import AppInfo from "./Main/app-info/app-info";
import ShopList from "./Main/shop-list/shop-list";
import "./App.css";

export default class App extends Component{
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
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "China", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "China", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: 6.99},
                {photo: process.env.PUBLIC_URL + "/assets/aromistico-coffee.png", name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: 6.99}
            ],
            theme: {
                light_icon: process.env.PUBLIC_URL + "/assets/light-coffee-beans.svg",
                dark_icon: process.env.PUBLIC_URL + "/assets/dark-coffee-beans.svg",
                light_dark_icon: process.env.PUBLIC_URL + "/assets/light-dark-coffee-beans.svg",
            },
            term: "",
            filter: ""
        }
    }

    search = (items, term) => {
        if(!term){
            return items;
        }
        return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()))
    }
    updateTerm = (e) => {
        const term = e.target.value;
        this.setState(term);
    }
    filter = (items, filter) => {
        if(filter){
            return items.filter(item => item.name === filter)
        }
        return items;
    }
    filterSelect = (item) =>{
        this.setState({item})
    }
    render(){
        const {menu, headerData, appInfoData, shopData, theme, term} = this.state;
        const visibleProducts = this.search(shopData, term);


        return(
            <div className="container">
                <Header headerData = {headerData}>
                    <Menu menu={menu} icon = {theme.light_icon}/>
                </Header>
                <Main>
                    <AppInfo appInfoData={appInfoData} icon={theme.dark_icon}/>
                    <ShopList shopData = {visibleProducts}/>
                </Main>
                <Footer>
                    <Menu menu={menu} icon = {theme.light_dark_icon} position="center"/>
                </Footer>
                <Break icon = {theme.dark_icon}/>
            </div>
        )
    }
    
}