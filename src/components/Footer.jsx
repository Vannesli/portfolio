import "../components/Footer.css"
function footer(){
    return(
        <>
            <div className="section-footer">
                <div className="left-footer">
                    <div className="version">
                        v1.0.0
                    </div>
                    <span className="last-update">
                        last updated 2024-04-16
                    </span>
                </div>

                <div className="mid-footer">
                    <span className="sosial-media">LinkedIn<sup>1</sup></span>
                    <span className="sosial-media">Instagram<sup>2</sup></span>
                    <span className="sosial-media">Facebook<sup>3</sup></span>
                </div>

                <div className="right-footer">
                    <span className="farewell">Let's build something together.</span>
                    <span className="farewell">Nezli2808@gmail.com<sup>4</sup></span>
                </div>
            </div>
            <div className="copyright">
                <span className="copyright-text">©2024 VANNES. ALL RIGHT RESERVED</span>
            </div>
            
            {/* <div className="section-footer">
                <div className="Farewell">
                    <h1>vannes.</h1>
                </div>
                <div className="end">
                    <div className="end-teks">
                        <span>Made with love,</span>
                        
                    </div>
                    <div className="end-property">
                        <h1> Connect with me</h1>
                        <div className="property">
                            <div className="contact">
                                <span>Instagram</span>
                            </div>
                            <div className="contact">
                                <span>LinkedIn</span>
                            </div>
                        </div>
                        <div className="property">
                            <div className="contact">
                                <span>Gmail</span>
                            </div>
                            <div className="contact">
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                        © 2024 VANNES. ALL RIGHT RESERVED.
                </div>
            </div> */}
        </>
    )
}
export default footer