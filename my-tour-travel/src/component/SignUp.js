import "./SignUpStyle.css"

function SignUp(){
    return(
        <div className="SignUp-card">
            <h1>
                Sign-UP
            </h1>
             <form>
                <input placeholder="Name" type="text"/>
                <input placeholder="Email" type="email"/>
                <input placeholder="Password" type="password"/>
                <input placeholder=" Confrim Password" type="password"/>
                  <button type="submit">Sign UP</button>
            </form>
        </div>
    )
}
export default SignUp