import { Component } from "react";
import "./NavbarStyleSheet.css";
import { ContentMenu } from "./ContentMenu"


class Navbar extends Component {

    state = { clicked: false }
    handleclicked = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {

        return (

            <nav className="NavbarItems">
                <h1 className="navbar-Logo">Trippy</h1>

                <div className="menu-icons" onClick={this.handleclicked}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>

                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {ContentMenu.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url} className={item.cname}>
                                    <i className={item.icon} /> {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <button>Signup</button>
                </ul>
            </nav>
        )
    }

}

export default Navbar;