import Menu from "../Menu/menu";
import Break from "../Break/break"
import "./footer.css"

function Footer({menu, menu_icon, footer_icon}){

    return(
        <footer>
            <Menu menu={menu} icon={menu_icon}/>
            <Break icon = {footer_icon}/>
        </footer>
    )
}

export default Footer;