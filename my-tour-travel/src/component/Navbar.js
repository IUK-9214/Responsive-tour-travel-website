import { Component } from "react";
import "./NavbarStyleSheet.css";
import {ContentMenu} from "./ContentMenu"


class Navbar extends Component {

    render(){

        return(

            <nav className="NavbarItems">
                <h1 className="navbar-Logo">Trippy</h1>
                <ul className="nav-menu">
                   {ContentMenu.map((item,index)=>{
                    return(
                         <li key={index}>
                        <a href={item.url}  className={item.cname}>
                        <i className={item.icon}/> {item.title}
                        </a>
                    </li>
                    )
                   })}
                </ul>
            </nav>
        )
    }

}

export default Navbar;