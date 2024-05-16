export default function Footer() {
 return(

 
    <>
        <div
            style={{
                padding: "15px",
                margin: "1px",
                display: "flex",
                
                justifyContent: "end",
            }}>


            <div className="email">
                <h1>Ready to get started? Sign up now!</h1>

                <form>

                    <input type="email" placeholder="Email Address" required=""></input>
                </form>

                <form>

                    <a className="btn btn-primary" style={{ padding: "15px", position: "relative", left: "30px" }}>Submit</a>

                </form>

            </div>

        </div>
        <footer>
            <div style={{ padding: "28px", display: "flex", justifyContent: "center" }}>
                <a href="About">About</a>.
                <a href="Countact"> Countact </a>.
                <a href="Terms of use"> Terms of use </a>.
                <a href="Privacy Policy"> Privacy Policy </a>
            </div>

        </footer>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

            <p className="text-muted small mb-4 mb-lg-0"> @ Your Website 2023.All Rights Reserved</p>

        </div><div style={{ display: "flex", justifyContent: "center" }}>
            <a href="#"><i className="fab fa-facebook fs-3"></i></a>

            <a href="#"><i className="fab fa-twitter fs-3"></i></a>

            <a href="#"><i className="fab fa-instagram fs-3"></i></a>
        </div>
    </>
 )
}