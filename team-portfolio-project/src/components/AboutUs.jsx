import groupPic from '../assets/grouppic.png'
import { BsPersonVcardFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";

function AboutUs() {
    return (
        <div className="aboutus flex-col justify-items-center items-center">
            <div className="relative w-3/4 mx-auto border-t-4 text-gray-600 min-h-[30rem] flex items-center justify-center">
                {/* Large faded CAREER text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                    <h1 className="career text-[20rem] lg:text-[20rem] font-bold leading-none whitespace-nowrap">
                        CAREER
                    </h1>
                </div>

                {/* "About Us" in front */}
                <p className="relative z-10 text-center gradient-text1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-inter font-bold">
                    ABOUT US
                </p>
            </div>

            {/* This div ensures the content is in front of the CAREER text */}
            <div className="relative z-10 flex justify-center items-center">
                <div>
                    <img src={groupPic} alt="Group Picture" className='groupPicture' />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-center items-center py-10 px-4">
                        <div className='flex-col border-r-[3px] 
                        w-200 bg-gradient-to-b from-cyan-400 to-purple-600 
                        border-transparent bg-clip-border'>
                            <div className='pr-5'>
                                <div className='teamBgDiv flex justify-end items-center items-center'>
                                    <BsPersonVcardFill className="text-blue-400 text-3xl" />
                                    <p className='teamBgText text-white text-2xl font-bold pr-2'>Team Background</p>
                                </div>
                                <p className="text-white text-sm text-right">DevNexus was formed in the year 2025 with the goal of creating cutting-edge web applications that enhance user
                                    engagement. The team of web developers is currently in their third year at Cavite State University - Imus
                                    Campus and is honing their skills in web technologies. The team is composed of members knowledgeable in front-end, back-end development, and database management.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-10 px-4">
                        <div className='flex-col border-r-[3px] 
                        w-200 bg-gradient-to-b from-cyan-400 to-purple-600 
                        border-transparent bg-clip-border'>
                            <div className='pr-5'>
                                <div className='teamBgDiv flex justify-end items-center items-center'>
                                    <GoGoal className="text-blue-400 text-3xl" />
                                    <p className='teamBgText text-white text-2xl font-bold pr-2'>Purpose</p>
                                </div>
                                <p className="text-white text-sm text-right">
                                    Our purpose is to develop high-performance, scalable, and secure web applications
                                    that help users thrive in the digital landscape. We aim to deliver efficient, user-friendly,
                                    and future-ready web solutions to address the needs of our clients and users.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
