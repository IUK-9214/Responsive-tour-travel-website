import "./FooterStyleSheet.css"

const Footer = () => {
    return (

        <div className="footer">
            <div className="top">
                <div>
                    <h1>Trippy</h1>
                    <p>Choose Your Best Destination</p>

                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square" />
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square" />
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square" />
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square" />
                    </a>

                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/"> Change Logo</a>
                    <a href="/"> Status</a>
                    <a href="/"> License</a>
                    <a href="/"> All Version</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/"> GitHub</a>
                    <a href="/"> Issues</a>
                    <a href="/"> Project</a>
                    <a href="/"> Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/"> Trouble Shooting</a>
                    <a href="/"> Contact us</a>

                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms Of Service </a>
                    <a href="/">Privacy</a>
                    <a href="/"> License</a>

                </div>
            </div>
        </div>
    )
}

export default Footer

