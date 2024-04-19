import React, { useState } from 'react';
import "../components/Hero.css";
import logo2 from "../assets/nez1.jpg";
import logo3 from "../assets/nez2.jpg";
import logo4 from "../assets/nez3.jpg";
import logo5 from "../assets/nez4.jpg";
import Vari from "../assets/vari.gif";

function Hero() {
    const [clickCount, setClickCount] = useState(0);
    const [displays, setDisplays] = useState([false, false, false, false]);

    // const handleClick = () => {
    //     if (clickCount < 4) {
    //         const newDisplays = [...displays];
    //         newDisplays[clickCount] = true;
    //         setDisplays(newDisplays);
    //         setClickCount(prevCount => prevCount + 1);
    //     } else {
    //         setDisplays([false, false, false, false]);
    //         setClickCount(0);
    //     }
    // };

    // Daftar URL gambar untuk setiap display
    // const imageUrls = [
    //     logo2,
    //     logo3,
    //     logo4,
    //     logo5,
    // ];

    // Daftar deskripsi untuk setiap display
    // const descriptions = [
    //     "Hey! thankyou for coming",
    //     "Im really enjoy",
    //     "Deskripsi untuk Display 3",
    //     "Deskripsi untuk Display 4",
    // ];
    // onClick={handleClick}

    return (
        <>
            <div className="hero-section">
                <div className="container-hero">
                    <div className="container-brand">
                        <div className='container-vari'>
                            <h1 className="text-cloud">Hey, im Vari<br/>Vannes' assistant</h1>

                            <div className='icon-vari'>
                            <span className="name" ><img src={Vari}></img></span>
                            </div>
                            {displays.map((display, index) => (
                                display && (
                                    <div key={index} className={`display${index + 1}`} id='container-display'>
                                        <img src={imageUrls[index]} alt={`gambar${index + 1}`} style={{ width: '200px' }} />
                                        <p className="description">{descriptions[index]}</p>
                                    </div>
                                )
                            ))}
                        </div>
                        
                    </div>
                    <div className='assistant'>
                    <a href="#about" className='teks-vari'> Let me help you to know about Vannes</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
