import "../components/Footer.css"
function footer(){
    return(
        <>
            <div className="section-footer">
                <div className="left-footer">
                    <div className="container-left-footer">
                    <div className="version">
                        v1.4.2
                    </div>
                    <span className="last-update">
                        last updated 2024-04-22
                    </span>
                    </div>
                </div>

                <div className="mid-footer">
                    <a class="sosial-media" href="https://www.linkedin.com/in/vannesvannes" target="_blank">LinkedIn<sup>1</sup></a>
                    <a class="sosial-media" href="https://www.instagram.com/vannes_li/" target="_blank">Instagram<sup>2</sup></a>
                    <a class="sosial-media" href="https://wa.me/+6282215282696" target="_blank">Whatsapp<sup>3</sup></a>
                </div>

                <div className="right-footer">
                    <div className="container-right-footer">
                    <span className="farewell">Let's build something together.</span>
                    <a class="sosial-media" href="" target="_blank">Nezli2808Gmail.com<sup>4</sup></a>
                    </div>
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