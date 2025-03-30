import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header"
import { Loader } from "./Loader";
import Mail from "./Mail";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";
import BioData from "./SelfAbout";
import Projects from "./Projects";
import Response from "./Response";
import Service from "./Service";
import Testomonial from "./Testomonial";
import Freelancer from "./Freelancer";
import Footer from "./Footer";

const HomePage = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 5000) 
    }, [])
    return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center `}>
{   loading!==true?<>
    <Toaster/>
        <Header />
        <About />
        <BioData />
        <Projects />
        <Response />
        <Skills />
        <Experience />
        <Service />
        <Testomonial />
        <Freelancer />
        <Contact />
        <Footer />
        <Mail />
        <Social />
        </>:
        <Loader/>}
    </div>
};
export default HomePage;