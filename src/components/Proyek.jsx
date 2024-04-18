import "../components/Proyek.css"
import { Link } from 'react-router-dom';
import item1 from "../assets/azuki.png"
import item2 from "../assets/azuki2.png"
import item3 from "../assets/siri.png"
import item4 from "../assets/Valorantinfo Thumbnail.png"
import item5 from "../assets/KPU.png"
import item6 from "../assets/vali.png"
import item7 from "../assets/Thumbnail GymNez.png"
import React from "react"
import axios from "axios";
import { useState, useEffect } from "react";
import Detailproyek from "../pages/Detail_proyek";
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
    return(
        <>
            <div className="section-proyek">
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
                                        <p className="about-proyek">{subItem.proyek_about}</p>
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