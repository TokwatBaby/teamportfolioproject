import logo from '../assets/logo.png';
import group from '../assets/group.png';
import Principle from './TeamMission';
import Principle1 from './TeamVision';


function Intro() {

    return (

        <main className="relative flex flex-col justify-center
                px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:p-20
                bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">

            <section className="relative flex flex-col justify-center p-4 sm:p-6 md:p-8">

                <div className="absolute top-0 left-0 w-24 h-24 border-t border-l
                         border-gray-600 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-24 h-24 border-t border-r
                         border-gray-600 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l
                         border-gray-600 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 border-b border-r
                         border-gray-600 rounded-br-2xl"></div>

                <div className="text-center m-10 sm:m-12 md:m-16 lg:m-20">
                    <div>
                        <p className='text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                            Welcome to
                        </p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6'>
                        <a href="#">
                            <img src={logo} alt="logo" className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40' />
                        </a>
                        <h1 className='text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>DevNexus</h1>
                    </div>
                    <div>
                        <p className='text-transparent text-xl sm:text-2xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2]
                                inline-block border-b-2 border-gray-600 mt-20 sm:mt-32'>
                            A team composed of web developers
                        </p>
                    </div>
                </div>

            </section>

            <section className='relative flex flex-col justify-center p-8'>

                <div className='relative flex flex-col p-16 gap-6 items-center 
                                justify-center text-center -mb-25'>
                    <img src={group} alt="group" className='w-20 h-20' />
                    <h1 className='text-white text-4xl font-bold'>Team Introduction</h1>
                    <p className='text-white text-base font-medium'>
                        We are a team of passionate and innovative web developers committed to delivering high-quality,
                        scalable, and efficient digital solutions. With a strong foundation in both front-end and back-end
                        technologies, we specialize in creating responsive, user-friendly websites and powerful web
                        applications tailored to meet the unique needs of our clients. Our team thrives on collaboration,
                        continuous learning, and problem-solving. From initial concept to final deployment, we work closely
                        with our clients to turn their ideas into impactful, future-ready web solutions.
                    </p>
                </div>

                <div className="relative flex flex-col xl:flex-row justify-center items-center p-16 gap-16 text-base xl:text-lg">
                    <div className="transform scale-110">
                        <Principle />
                    </div>
                    <div className="transform scale-110">
                        <Principle1 />
                    </div>
                </div>


            </section>

            <hr className='text-gray-600' />

        </main>

    );

}

export default Intro