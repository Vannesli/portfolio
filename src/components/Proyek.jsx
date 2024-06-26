import "../components/Proyek.css"
import { Link } from 'react-router-dom';
import item1 from "../assets/azuki.png"
import item2 from "../assets/azuki2.png"
import item3 from "../assets/siri.png"
import item4 from "../assets/Valorantinfo Thumbnail.png"
import item5 from "../assets/KPU.png"
import item6 from "../assets/vali.png"
import item7 from "../assets/Thumbnail GymNez.png"
import axios from "axios";
import React, { useEffect, useRef, useState } from 'react';
import Detailproyek from "../pages/Detail_proyek";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Proyek(){
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
      setSelectedImage(image);
    };

    const [proyek, setProyek] = useState([]);

    useEffect(() => {
        axios("https://6611772395fdb62f24ed3b1f.mockapi.io/Proyek")
        .then(result => setProyek(result.data))
        .catch(error => console.error('Error fetching data:', error));
    }, [])

    const containerProyekRef = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Daftarkan ScrollTrigger

        const containerProyekElement = containerProyekRef.current;

        gsap.from(containerProyekElement, {
            opacity: 0,
            y: 100,
            duration: 2.5,
            scrollTrigger: {
                trigger: containerProyekElement,
                start: "top 80%", // Atur titik awal animasi saat container-proyek memasuki viewport 80% dari atas
                toggleActions: "play none none none" // Atur aksi animasi saat masuk ke viewport
            }
        });
    }, []);
    return(
        <>
            <div className="section-proyek" ref={containerProyekRef}>
                {/* <span className="project-title">
                    Projects
                </span> */}
                <div className="container-proyek">
                {proyek.map((item, index) => (
                    (index % 3 === 0) && (index > 0) ? (
                        <div key={index} className="proyek1">
                            {proyek.slice(index - 3, index).map(subItem => (
                                <div key={subItem.id} className="item" onClick={() => handleImageClick(subItem.Thumbnail)}>
                                    <Link to={`/detail/${subItem.id}`}>
                                        <img className="img-proyek"src={subItem.Thumbnail} alt={subItem.proyek_name} />
                                    </Link>
                                    <div>
                                        <span className="name-proyek">{subItem.proyek_name}</span>
                                        <p className="about-proyek">{subItem.proyek_sub_name}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null
                ))}
                </div>


            </div>
            
        </>
    )

            

      

      


      
}
export default Proyek