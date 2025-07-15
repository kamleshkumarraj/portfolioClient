import HTML from '../Icons/html-5-svgrepo-com.svg';
import CSS from '../Icons/css-3-svgrepo-com.svg';
import js from '../Icons/javascript-logo-svgrepo-com.svg';
import ReactIcons from '../Icons/react-svgrepo-com.svg';
import Node from '../Icons/nodejs-icon-logo-svgrepo-com.svg';
import Express from '../Icons/express-svgrepo-com.svg';
import MongoDb from '../Icons/mongodb-opened-svgrepo-com.svg';
import Api from '../Icons/api-interface-svgrepo-com.svg';
import TS from '../Icons/typescript-opened-svgrepo-com.svg';
import redux from '../Icons/redux-svgrepo-com.svg';
import tailwind from '../Icons/tailwind-svgrepo-com.svg'
import bootstrap from '../Icons/bootstrap-fill-svgrepo-com.svg'
import sass from '../Icons/sass-svgrepo-com.svg';
import Angular from '../Icons/angular-icon-logo-svgrepo-com (1).svg';
import GSAP from '../Icons/animation-svgrepo-com.svg'
import ui from '../Icons/user-interface-svgrepo-com.svg'
import sql from '../Icons/mysql-opened-svgrepo-com.svg'
import graphQl from '../Icons/graphql-config-svgrepo-com.svg';
import redish from '../Icons/redis-svgrepo-com.svg'
import cpp from '../Icons/cpp3-svgrepo-com.svg'
import Java from '../Icons/java-logo-svgrepo-com.svg'
import c from '../Icons/c_logo.png'
import python from '../Icons/python-opened-svgrepo-com.svg'
import postman from '../Icons/postman-icon-svgrepo-com.svg';
import window from '../Icons/window-operating-system-svgrepo-com.svg';
import Linux from '../Icons/linux-opened-svgrepo-com.svg';
import VsCode from '../Icons/vscode2-opened-svgrepo-com.svg';
import compass from '../Icons/mongodb-svgrepo-com.svg';
import Git from '../Icons/git-merge-svgrepo-com.svg';
import Github from '../Icons/github-svgrepo-com.svg'


const Icons = {
    HTML : HTML,
    CSS : CSS,
    JavaScript : js,
    "React JS" : ReactIcons,
    Redux : redux,
    "Tailwind CSS" : tailwind,
    Bootstrap : bootstrap,
    SASS : sass,
    Angular : Angular,
    GSAP : GSAP,
    "Material UI" : ui,
    "Node JS" : Node,
    "Express JS" : Express,
    "MongoDB" : MongoDb,
    "MySQL" : sql,
    "Rest API" : Api,
    GraphQL : graphQl,
    Redish : redish,
    "C++" : cpp,
    Java : Java,
    TypeScript : TS,
    C : c,
    Python : python,
    "Git" : Git, 
    "Github" : Github, 
    "VS Code" : VsCode, 
    "Postman" : postman, 
    "MongoDB Compass" : compass, 
    "Window" : window, 
    "Linux" : Linux
}

const SkillBadge=(skills:[])=>{
    return skills.map((skill:any, index:number)=><div key={index} className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 bs-mx:py-0 bs-mx:px-1.5 bs-mx:gap-1 mb-1">
         <img className="w-[40px] bs-mx:w-[36px] xsm-mx:w-[28px] !p-1"  src={Icons[`${skill}`]} />
         <div className="text-textColor text-[2rem] font-medium sm-mx:text-[1.8rem] xs-mx:text-[1.4rem] ">{skill}</div>
    </div>)
}

const SkillCard =(props:any)=>{
    return <div data-aos="fade-up"   data-aos-duration="800" data-aos-easing="ease-in-sine" className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl  mb-3 border border-primaryColor p-5 bs-mx:p-3 sm-mx:w-full ">
        <div className="text-3xl mb-4 text-white text-center sm-mx:text-[2.4rem] xs-mx:text-xal font-bold ">{props.title}</div>
        <div className="flex flex-wrap justify-center gap-3 bs-mx:gap-2">
            {SkillBadge(props.skills)}
        </div>
    </div>
}
export default SkillCard;