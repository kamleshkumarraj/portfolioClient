
import { Info } from "../User";
import Typewriter from "typewriter-effect";
import { Button, useMatches } from "@mantine/core";
import ResumeViewer from "./ResumeViewer";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";
import Particles from "./magicui/Particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";
import profilePic from '../assets/profile-pic-removebg.png'
const About = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const btn =useMatches({
        xs:'md',
        sm:'lg',
        md:'xl',
        lg:'xl',
        xl : '2xl'
    })
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="800" className="mt-[11.2rem] flex relative overflow-hidden justify-around items-center font-mono px-[4rem] py-[10rem] sm-mx:px-[1.6rem] xs-mx:px-2 xs-mx:py-[1.6rem] h-fit lg-mx:justify-between bs-mx:flex-wrap bs-mx:flex-col-reverse bs-mx:!overflow-visible bs-mx:gap-6 md-mx:px-[2.4rem]" id="About">
                <Particles
                    className="absolute inset-0 -z-20"
                    quantity={1000}
                    ease={80}
                    vx={.1}
                    vy={.1}
                    color="#64FFDA"
                    refresh
                />
                <div className="flex flex-col bs:ml-10 bs:w-3/5 lg-mx:gap-3 bs-mx:items-center">
                    <div className="text-[3rem] text-primaryColor lg-mx:text-[2.4rem] xs-mx:text-[2rem] xsm-mx:text-[1.8rem] ">Hi, I am</div>
                    <div className="text-white text-[4.25rem] font-extrabold lg-mx:text-5xl sm-mx:text-4xl xs-mx:text-[3rem] xsm-mx:text-[27px]">{Info.name}</div>
                    <div className="text-white text-4xl flex font-semibold lg-mx:text-[27px] sm-mx:text-[2.4rem] xs-mx:text-[2rem] xsm-mx:text-[1.8rem] ">I'm a&nbsp;<span className="text-primaryColor"><Typewriter options={{ strings: Info.stack, autoStart: true, loop: true, }} /> </span></div>
                    <div className="text-textColor text-[2rem] w-[90%] text-justify my-8 lg-mx:my-0 font-semibold lg-mx:text-base sm-mx:text-[1.4rem] xs-mx:text-[1.2rem]">{Info.bio}</div>
                    <div className="xs-mx:w-[90%] flex gap-3 xs-mx:justify-between">
                        <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit text-[1.8rem] py-[1rem]   xs-mx:!w-[46%] "  variant="filled"  size={btn} color="#64FFDA">Check Resume</Button>
                        <Button component="a" href="Resume.pdf" download={Info.name} className="focus-visible:!outline-none !text-primaryColor text-[1.8rem] py-[1rem] !w-fit xs-mx:!w-[46%] "  variant="outline" size={btn} color="#64FFDA" rightSection={<IconDownload size={20} />}>Download</Button>
                    </div>
                </div>
                <div className="flex items-center justify-center rounded-full h-fit bs:mr-10 w-fit">
                    <NeonGradientCard className="w-[325px] h-[325px] lg-mx:w-64 lg-mx:h-64 xsm-mx:w-56 xsm-mx:h-56 items-center justify-center text-center">
                        <img className="w-full h-full rounded-full " src={profilePic} alt="profile" />
                    </NeonGradientCard>
                </div>
            </div>
            <ResumeViewer opened={opened} close={close} />
        </>
    )
}
export default About;