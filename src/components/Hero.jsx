import React, { useState, useEffect,useRef } from 'react';
import "../components/Hero.css";
import logo2 from "../assets/nez1.jpg";
import logo3 from "../assets/nez2.jpg";
import logo4 from "../assets/nez3.jpg";
import logo5 from "../assets/nez4.jpg";
import Vari from "../assets/vari.gif";
import heropict1 from "../assets/vannes.jpg"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const box1Ref = useRef(null);
    const box2Ref = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1.5, ease: "power4.out" } });

        tl.from(box1Ref.current, { opacity: 0, y: 100, delay: 0.5 })
          .to({}, { duration: 0.5 }) // Penundaan tambahan
          .from(box2Ref.current, { opacity: 0, x: -100 }, "-=0.5");

    }, []);

    return (
        <>
            <div className="hero-section">
            
                <div className='text-wrapper'>
                    <h1> Web Developer & UI/UX Designer </h1>
                    <h1> Web Developer & UI/UX Designer </h1>
                    <h1> Web Developer & UI/UX Designer </h1>
                    <h1> Web Developer & UI/UX Designer </h1>
                </div>
                <div className='container-hero'>
                    <div className='container-box'>
                        <div ref={box1Ref} className='box-hero1'>
                            <img src={heropict1}></img>
                            
                        </div>
                        <div ref={box2Ref} className='box-hero2'>
                            <div className='teks-introduce'>
                            <h1 className="introduce">Hey! Im Vannes. </h1>
                            <h1 className="introduce">Im focus on web-based design and development</h1>
                            </div>
                            <a href="#about" className='teks-vari'> A bit about me</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
