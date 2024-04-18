import "../components/Experience.css"
const Workcontainer = (
    {nama_company, nama_program, nickname, logo_company, background}) => {
        const containerStyle = {
            backgroundColor: background
        };
        return(
        <div className="color-container" style={containerStyle}>
            <div className="company">
                <span className="name_company">{nama_company}</span>
                <span className="name_program">{nama_program}</span>
            </div>

            <div className="brand">
                <img src={logo_company}/>
                <span className="nick">{nickname}</span>
            </div>
        </div>
    )
}
export default Workcontainer