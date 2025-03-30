
import { socialLinks } from "../User";

const Social=()=>{
    const socialIcons=socialLinks.map((socialLink, index)=>{
        return <a   key={index} href={`${socialLink.link}`} target="_blank"  className="font-mono text-[1.8rem]  hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
       <div  data-aos-duration="800" > <socialLink.icon stroke={1.5} className="-rotate-90" size={25} /></div>
    </a>
    })

    return <div  className="fixed flex items-center gap-8 rotate-90 md-mx:hidden text-textColor bottom-52 -left-48 " >
        {socialIcons}
        <hr className="w-40 border rounded-full bg-textColor border-textColor"/>
    </div>
}
export default Social;