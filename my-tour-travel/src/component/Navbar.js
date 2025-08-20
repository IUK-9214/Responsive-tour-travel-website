import { Component } from "react";
import "./NavbarStyleSheet.css";
import { ContentMenu } from "./ContentMenu"
import { Link } from "react-router-dom";


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
                                <Link to={item.url} className={item.cname}>
                                    <i className={item.icon} /> {item.title}
                                </Link>
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