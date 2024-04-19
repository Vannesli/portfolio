import { useEffect,useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import valorantinfo from "../assets/Valorantinfo Thumbnail.png"
import item1 from "../assets/azuki.png"
import Footer from "../components/Footer"
import "../pages/Detail_proyek.css"
function Detailproyek({}){

    // const [proyek, setProyek] = useState([]);

    // useEffect(() => {
    //     axios("https://6611772395fdb62f24ed3b1f.mockapi.io/Proyek")
    //     .then(result => setProyek(result.data))
    //     .catch(error => console.error('Error fetching data:', error));
    // }, [])

    const { id } = useParams();
    const [proyekDetail, setProyekDetail] = useState(null);

    useEffect(() => {
        axios(`https://6611772395fdb62f24ed3b1f.mockapi.io/Proyek/${id}`)
            .then(response => {
                setProyekDetail(response.data);
            })
            .catch(error => {
                console.error('Error fetching proyek detail:', error);
            });
    }, [id]);

    // const renderVideo = () => {
    //     if (proyekDetail) {
    //         if (id === '4') {
    //             return <iframe width="560" height="315" src="https://www.youtube.com/watch?v=rPysfjP_NWg&pp=ygUNdmlkZW8gc2luZ2thdA%3D%3D" title="Video 1"></iframe>;
    //         } else if (id === '7') {
    //             return <iframe width="560" height="315" src="https://www.youtube.com/watch?v=rsFovUU_0FQ&pp=ygUNdmlkZW8gc2luZ2thdA%3D%3D" title="Video 2"></iframe>;
    //         } 
    //     }
    // };

    return(
        <>
            
                
                    {proyekDetail ? (
                        <div className="hero-detail">
                            <div className="image-hero-detail">
                                <h2>{proyekDetail.proyek_name}</h2>
                                <img src={proyekDetail.Thumbnail} alt={proyekDetail.proyek_name} />
                                {/* Tampilkan detail lainnya sesuai kebutuhan */}
                            </div>
                        <div className="row-hero-detail">
                            <div className="name-detail">
                            <span className="proyek-name">
                                {proyekDetail.proyek_name}
                            
                            </span>
                            <p className="proyek-about">
                                {proyekDetail.proyek_sub_name}
                            </p>
                        </div>

                        <div className="column-detail">
                            <div className="row-detail">
                                <div className="column-detail-role">
                                    <p className="proyek-about">{proyekDetail.proyek_about}</p>
                                    <div className="row-detail-role">
                                        <div className="column-row-detail-role">
                                            <span className="title-role">Role</span>
                                            <span className="role"> {proyekDetail.Role}</span>
                                        </div>
                                        <div className="column-row-detail-collab">
                                            <span className="title-collab">Collaborators</span>
                                            <span className="collab"> {proyekDetail.Collaborators} </span>
                                            <span className="collab"> {proyekDetail.Collaborators2} </span>
                                            <span className="collab"> {proyekDetail.Collaborators3} </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="column-detail-role">
                                    <p className="proyek-about">{proyekDetail.proyek_about_2}</p>
                                    <div className="row-detail-role">
                                        <div className="column-row-detail-duration">
                                            <span className="title-duration">Duration</span>
                                            <span className="duration"> {proyekDetail.Duration}</span>
                                        </div>
                                        <div className="column-row-detail-tools">
                                            <span className="title-tools">Tools</span>
                                            <span className="tools"> {proyekDetail.Tools} </span>
                                            <span className="tools"> {proyekDetail.Tools2} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="foto-detail">
                                <img src={proyekDetail.pict1}></img>
                                <p className="text-pict">{proyekDetail.textpict1}</p>
                                {/* {renderVideo()} */}
                                <img src={proyekDetail.pict2}></img>
                                <img src={proyekDetail.pict3}></img>
                                <img src={proyekDetail.pict4}></img>
                                <img src={proyekDetail.pict5}></img>
                                <p className="text-pict">{proyekDetail.textpict2}</p>
                                <img src={proyekDetail.pict6}></img>
                                <img src={proyekDetail.pict7}></img>
                                <img src={proyekDetail.pict8}></img>
                            </div>
                        </div>
                        </div>
                    </div>
                    ) : (
                        console.log("filtering success")
                    )};
                    <Footer />
    </>
    
    )
}
export default Detailproyek