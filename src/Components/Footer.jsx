import jietImg from '../assets/profile-pic-removebg.png'

const Footer=()=>{
    return <div className="footer-section">
    <div className="education-box rounded-[.5rem]">
        <div className="text-section rounded-[1rem]">
            <h1 className="common-heading">Education Details</h1>
            <div className="details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime perspiciatis facilis veritatis magnam numquam veniam, animi et officia pariatur. Suscipit, ab itaque? Ducimus cumque consectetur incidunt aperiam et quisquam. Distinctio!</p>
            </div>
            <div className="contact">
                <h3>Jodhpur, Rajsthan (India)</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates reprehenderit similique debitis.</p>
            </div>
        </div>
        <div className="image-section">
            <img src={jietImg} alt="" />
        </div>
    </div>
    <div className="footer-body">
        <div className="box-1 box">
            <h3>About</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sint culpa iste pariatur ratione voluptas tenetur quas velit, nemo optio exercitationem corrupti vel.</p>
        </div>
        <div className="box">
            <h3>Links</h3>
            <div className="link common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Home</a>
            </div>
            <div className="link common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">About</a>
            </div>
            <div className="link common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Services</a>
            </div>
            <div className="link common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Portfolio</a>
            </div>
            <div className="link common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Contact</a>
            </div>
        </div>
        <div className="box">
            <h3>Services</h3>
            <div className="service common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Web Design</a>
            </div>
            <div className="service common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Web Development</a>
            </div>
            <div className="service common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Mern Project</a>
            </div>
            <div className="service common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Online classNamees</a>
            </div>
            <div className="service common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Youtube Cources</a>
            </div>

        </div>
        <div className="box question">
            <h3>Have a Question?</h3>
            <div className="question common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">Jodhpur, Rajsthan</a>
            </div>
            <div className="question common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">+91 8603416388</a>
            </div>
            <div className="question common">
                <i className="fa-solid fa-arrow-right"></i>
                <a href="">kamlesh.22jics061@jietjodhpur.ac.in</a>
            </div>

        </div>
        <div className="box icon-box">
            <div className="icon common">
                <i className="fa-brands fa-square-instagram"></i>
            </div>
            <div className="icon common">
                <i className="fa-brands fa-discord"></i>
            </div>
            <div className="icon common">
                <i className="fa-brands fa-youtube"></i>
            </div>
        </div>
        <div className="copy-right">
            <p>Copyright @2024 All rights reserved | This tempelate by made with ❤️ Kamlesh Kumar</p>
        </div>
    </div>
   </div>
}
export default Footer;