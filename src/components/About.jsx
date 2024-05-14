import React, { useEffect, useRef } from 'react';
import "./About.css"
import reactlogo from "../assets/react.png"
import javascriptlogo from "../assets/javascript.png"
import figmalogo from "../assets/figma.png"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function about(){

    const aboutDetailRef = useRef(null);
    const aboutNameRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Daftarkan ScrollTrigger

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutDetailRef.current,
                start: "top 80%", // Atur titik awal animasi saat bagian about-detail memasuki viewport 80% dari atas
                toggleActions: "play none none none" // Atur aksi animasi saat masuk ke viewport
            }
        });

        tl.from(aboutDetailRef.current, { opacity: 0, y: 100, duration: 1 });

        // Animasi untuk about-name
        gsap.from(aboutNameRef.current, {
            opacity: 0,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: aboutNameRef.current,
                start: "top 80%", // Atur titik awal animasi saat bagian about-name memasuki viewport 80% dari atas
                toggleActions: "play none none none" // Atur aksi animasi saat masuk ke viewport
            }
        });

    }, []);

    return(
        <>
            <div id="about" className="about-section">
                <div ref={aboutNameRef} className="about-name">
                    <span>About</span>
                </div>
                <div ref={aboutDetailRef} className="about-detail">
                    <div className="detail-teks">
                        <p className="teks-detail">
                        I create design with the best user experience and develop them based on website. 
                        I use Figma as the main platform in UI/UX Design and React.js for development. 
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