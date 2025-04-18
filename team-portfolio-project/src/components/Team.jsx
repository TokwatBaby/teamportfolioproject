import harv from '../assets/harv.png';
import nyel from '../assets/nyel.png';
import nix from '../assets/nix.png';
import pits from '../assets/pits.png';
import rod from '../assets/rod.png';
import Card from './Card';

function Team() {

    return (

        <main className="relative flex flex-col justify-center
                        2xl:p-20
                        bg-[linear-gradient(to_bottom,_#0D0D0D,_#1E1E1E)]">
            <div className="relative w-11/12 md:w-3/4 mx-auto border-t-4 text-gray-600 min-h-[30rem] flex items-start justify-center pt-20 bg-clip-text">
                <div className="absolute top-14 left-1/2 -translate-x-1/2 text-white 
                            opacity-4 text-[140px] font-extrabold z-0 scale-200 ">
                    MEMBERS
                </div>

                <section className="relative flex flex-col justify-center items-center p-8 bg-clip-text">

                    <div className="relative text-center bg-clip-text">
                        <h1 className='text-transparent text-5xl font-extrabold bg-clip-text 
                                bg-gradient-to-r from-[#00FFFF] to-[#8A2BE2] inline-block'>
                            GET TO KNOW US
                        </h1>
                    </div>

                    <div className="flex flex-col justify-center w-full h-full p-25 bg-clip-text">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 mb-15 bg-clip-text px-4 sm:px-8 lg:px-16">
                            <Card
                                img={harv}
                                name='Jan Harvey Javier'
                                role='FULL STACK DEVELOPER'
                            />
                            <Card
                                img={nyel}
                                name='Dhaniel Lofamia'
                                role='FULL STACK DEVELOPER'
                            />
                            <Card
                                img={nix}
                                name='Carlos Jr Nicol'
                                role='FULL STACK DEVELOPER'
                            />
                        </div>


                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-20 mb-15 bg-clip-text px-4 sm:px-8 lg:px-16">
                            <Card
                                img={pits}
                                name='John Patrick Macaspac'
                                role='FRONT END DEVELOPER'
                            />
                            <Card
                                img={rod}
                                name='Rodney Santos'
                                role='FRONT END DEVELOPER'
                            />
                        </div>
                    </div>

                </section>

                <hr className='text-gray-600' />
            </div>
        </main>

    );

}

export default Team;
