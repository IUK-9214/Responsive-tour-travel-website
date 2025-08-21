

import "./HeroStyleSheet.css"

function Hero(props) {
    return (
        <>
            <div className={props.cName}>
                <img alt='heroImage' src={props.ImageUrl} />

                <div className="hero-text">
                    <h1>
                        {props.Title}
                    </h1>
                    <p>
                        {props.text}
                    </p>
                    <a href={props.Url} className={props.cButton} >
                        {props.buttontext}
                    </a>
                </div>

            </div>
        </>

    )


}
export default Hero;