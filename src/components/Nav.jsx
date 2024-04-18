import logo from "../assets/Logo vl.png"
import logo2 from "../assets/nez1.jpg"
import logo3 from "../assets/nez2.jpg"
import logo4 from "../assets/nez3.jpg"
import logo5 from "../assets/nez4.jpg"
import "../components/Nav.css"
import { useState } from "react"
function Nav(){
    const images = [logo, logo2, logo3, logo4, logo5];
    const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

    const profilehandler = () => {
        const newLogo = (currentLogoIndex + 1) % images.length;
        setCurrentLogoIndex(newLogo);
    };

    
    return(
        
        <>
            <div className="navbar">
                <div className="navigation-bar">
                    <div className="container-logo">
                        <img src={images[currentLogoIndex]} alt="Logo" onClick={profilehandler}></img>
                        <div className="logo-name">
                            {/* <h3>Vannes</h3> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Nav