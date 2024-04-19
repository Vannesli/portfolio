import "../components/About.css"
import reactlogo from "../assets/react.png"
import javascriptlogo from "../assets/javascript.png"
import figmalogo from "../assets/figma.png"
function about(){
    return(
        <>
            <div id="about" className="about-section">
                <div className="about-name">
                    <span>About</span>
                </div>
                <div className="about-detail">
                    <div className="detail-teks">
                        <p className="teks-detail">
                        I am a web or product designer and programmer who has an interest in work and technology. 
                        I use Figma as the main platform in UI/UX Design and React.js for developing. 
                        Currently living in Bandung, I am ready to face any design challenge
                        </p>
                    </div>
                    <p className="products-title">BUILDING PRODUCTS WITH</p>
                    <div className="detail-products">
                        
                        <div className="product-column1">


                            <div className="React">
                                <div className="product-row">
                                    <div className="container-logo-product">
                                        <img src={reactlogo}></img>
                                    </div>
                                    <div className="container-teks-product">
                                        <span>Programing Languages</span>
                                        <p>React.js</p>
                                    </div>
                                </div>


                            </div>

                            <div className="Javascript">
                                <div className="product-row">
                                    <div className="container-logo-product">
                                        <img src={javascriptlogo}></img>
                                    </div>
                                    <div className="container-teks-product">
                                        <span>Programing Languages</span>
                                        <p>Javascript</p>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="product-column2">
                            <div className="Figma">
                                    <div className="product-row">
                                        <div className="container-logo-product">
                                            <img src={figmalogo}></img>
                                        </div>
                                        <div className="container-teks-product">
                                            <span>Tools</span>
                                            <p>Figma</p>
                                        </div>
                                    </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default about;