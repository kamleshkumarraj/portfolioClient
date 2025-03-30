import { IconHexagonLetterK } from "@tabler/icons-react";
import SideBar from "./SideBar";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links=["About","Projects","Skills","Experience","Contact"];
const navLinks=(col:Boolean, clicked:any)=>{
    const handleClick=()=>{
        if(clicked)clicked();
    }
    return links.map((link, index)=>{
        return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-[1.8rem] font-mono hover:text-primaryColor`} href={`#${link}`}><span className="text-primaryColor">0{index+1}. </span>{link}</a>
    })
}

const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })
return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-[11.2rem]"} ${shadow?"shadow-[0px_10px_30px_-10px_#020c1b]":""} transition-transform duration-500 ease-in-out fixed w-full z-[99999] bg-bgColor h-[11.2rem]  px-[4rem]  justify-between items-center xs-mx:px-[1.6rem] xs-mx:h-[8rem] `}>
        
        <IconHexagonLetterK className="z-10" size={isMobile?45:60} color="#64FFDA" stroke={1.25}/>
        <div className="hidden gap-8 bs:flex">
            {navLinks(false, null)}
        </div>
        <SideBar/>
    </nav>
);
}
export default Header;
export {navLinks};