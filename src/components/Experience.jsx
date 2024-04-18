import "../components/Experience.css"
import Workcontainer from "./Workcontainer"
import logoskilvul from "../assets/skilvul.png"
import logosanbersy from "../assets/sanbersy.jpg"
import logodiklatkerja from "../assets/diklatkerja.png"
import logomaxtron from "../assets/maxtron.jpg"
import logomatata from "../assets/matataedu.jpg"
function experience(){
    return(
        <>
            <div className="experience-section">
                {/* <div className="experience-title">
                    <marquee>Work Experience</marquee>
                </div> */}
                <div className="experience-grid">
                    <div className="grid1">
                        <Workcontainer 
                            nama_company="PT.Impactbyte Teknologi Edukasi" 
                            nama_program="MSIB Batch4 Kampus Merdeka Frontend Web" 
                            nickname="Skilvul." 
                            logo_company={logoskilvul} 
                            background="#FF3E3E"
                        />
                        <Workcontainer 
                            nama_company="PT.Santai Berkualitas Syberindo" 
                            nama_program="Internship Frontend Web Development" 
                            nickname="Sanbercode." 
                            logo_company={logosanbersy} 
                            background="#6BCAFF"
                        />
                    </div>
                    <div className="grid2">
                        <Workcontainer 
                            nama_company="PT.Diklatkerja" 
                            nama_program="Freelance Frontend Web Development" 
                            nickname="Diklatkerja." 
                            logo_company={logodiklatkerja} 
                            background="#FFB554"
                        />
                        <Workcontainer 
                            nama_company="PT.Matata Edu" 
                            nama_program="Freelance Moderator" 
                            nickname="Edu." 
                            logo_company={logomatata} 
                            background="#FFC1F5"
                        />
                        <Workcontainer 
                            nama_company="CV.Maxtron Persada Indonesia" 
                            nama_program="Internship Computer Numerical Control Programmer" 
                            nickname="Maxtron" 
                            logo_company={logomaxtron} 
                            background="#5B8F67"
                        />

                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}
export default experience