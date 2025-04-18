import groupPic from '../assets/grouppic.png'
import { IdCard, Goal } from "lucide-react";

function AboutUs() {
    return (
        <div className="aboutus flex flex-col items-center bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
            <div className="relative w-full max-w-6xl mx-auto border-t-4 text-gray-600 min-h-[30rem] flex items-start justify-center pt-20 bg-clip-text px-4">
                {/* Large faded CAREER text */}
                <div>
                    <h1 className="absolute top-14 left-1/2 -translate-x-1/2 text-white 
                            opacity-4 text-[140px] font-extrabold z-0 scale-200 ">
                        CAREER
                    </h1>
                </div>

                {/* "About Us" in front */}
                <p className="text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block">
                    ABOUT US
                </p>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-center items-center -translate-y-50 px-4 gap-6 bg-clip-text">
                {/* Group Picture */}
                <div className="flex justify-center md:justify-end mb-6 md:mb-0">
                    <img src={groupPic} alt="Group Picture" className="groupPicture w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg " />
                </div>

                {/* Info Sections */}
                <div className="flex flex-col gap-6 w-full md:w-1/2 bg-clip-text">
                    {/* Team Background */}
                    <div className="flex items-start gap-4 bg-clip-text ">
                        {/* Content */}
                        <div className="flex-1 pr-4 bg-clip-text ">
                            <div className="flex items-center justify-end mb-3 bg-clip-text">
                                <IdCard className="text-blue-400 w-10 h-10 mr-2" />
                                <p className="text-white text-2xl font-bold ">Team Background</p>
                            </div>
                            <p className="text-white text-sm text-right bg-clip-text ">
                                DevNexus was formed in the year 2025 with the goal of creating cutting-edge web applications that enhance user engagement.
                                The team of web developers is currently in their third year at Cavite State University - Imus Campus and is honing their skills in web technologies.
                                The team is composed of members knowledgeable in front-end, back-end development, and database management.
                            </p>
                        </div>
                        {/* Gradient line */}
                        <div className="w-1 self-stretch bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full "></div>
                    </div>
                    {/* Purpose */}
                    <div className="flex items-start gap-4 bg-clip-text">
                        {/* Content */}
                        <div className="flex-1 pr-4 bg-clip-text">
                            <div className="flex items-center justify-end mb-3 bg-clip-text">
                                <Goal className="text-blue-400 w-10 h-10 mr-2" />
                                <p className="text-white text-2xl font-bold">Purpose</p>
                            </div>
                            <p className="text-white text-sm text-right bg-clip-text">
                                Our purpose is to develop high-performance, scalable, and secure web applications that help users thrive in the digital landscape.
                                We aim to deliver efficient, user-friendly, and future-ready web solutions to address the needs of our clients and users.
                            </p>
                        </div>
                        {/* Gradient line */}
                        <div className="w-1 self-stretch bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default AboutUs;
